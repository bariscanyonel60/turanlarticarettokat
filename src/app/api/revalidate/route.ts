import { SITE_CACHE_TAGS, purgeSiteCache, type SiteCacheTag } from "@/lib/site-cache";
import { timingSafeEqual } from "node:crypto";
import { connection } from "next/server";
import { NextResponse } from "next/server";

function secretsMatch(provided: string, expected: string) {
  const left = Buffer.from(provided);
  const right = Buffer.from(expected);
  if (left.length !== right.length) {
    return false;
  }
  return timingSafeEqual(left, right);
}

function readSecret(request: Request) {
  const header = request.headers.get("authorization");
  if (header?.startsWith("Bearer ")) {
    return header.slice("Bearer ".length).trim();
  }
  const url = new URL(request.url);
  return url.searchParams.get("secret")?.trim() ?? "";
}

function parseTags(value: unknown): SiteCacheTag[] {
  if (!Array.isArray(value)) {
    return [...SITE_CACHE_TAGS];
  }
  const allowed = new Set<string>(SITE_CACHE_TAGS);
  const tags = value.filter((item): item is SiteCacheTag => typeof item === "string" && allowed.has(item));
  return tags.length > 0 ? tags : [...SITE_CACHE_TAGS];
}

async function handlePurge(request: Request) {
  await connection();
  const expected = process.env.REVALIDATE_SECRET?.trim();
  if (!expected) {
    return NextResponse.json({ ok: false, error: "REVALIDATE_SECRET tanımlı değil." }, { status: 503 });
  }
  const provided = readSecret(request);
  if (!provided || !secretsMatch(provided, expected)) {
    return NextResponse.json({ ok: false, error: "Yetkisiz." }, { status: 401 });
  }

  let tags: SiteCacheTag[] = [...SITE_CACHE_TAGS];
  if (request.method === "POST") {
    try {
      const body = (await request.json()) as { tags?: unknown };
      tags = parseTags(body.tags);
    } catch {
      tags = [...SITE_CACHE_TAGS];
    }
  }

  purgeSiteCache(tags);
  return NextResponse.json({
    ok: true,
    purged: tags,
    at: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  return handlePurge(request);
}

export async function GET(request: Request) {
  return handlePurge(request);
}
