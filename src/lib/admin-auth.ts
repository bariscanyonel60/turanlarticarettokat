import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { connection } from "next/server";

const cookieName = "turanlar_admin";
const maxAgeSeconds = 60 * 60 * 12;

function sessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("Yönetim oturum anahtarı eksik.");
  }
  return secret;
}

function sign(payload: string) {
  return createHmac("sha256", sessionSecret()).update(payload).digest("hex");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }
  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function adminCredentialsMatch(username: string, password: string) {
  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPassword) {
    return false;
  }
  return safeEqual(username, expectedUser) && safeEqual(password, expectedPassword);
}

export async function createAdminSession() {
  const expiresAt = Date.now() + maxAgeSeconds * 1000;
  const payload = `admin.${expiresAt}`;
  const token = `${payload}.${sign(payload)}`;
  const jar = await cookies();
  jar.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: maxAgeSeconds,
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete(cookieName);
}

export async function isAdmin() {
  await connection();
  const jar = await cookies();
  const token = jar.get(cookieName)?.value;
  if (!token) {
    return false;
  }
  const roleEnd = token.indexOf(".");
  const macStart = token.lastIndexOf(".");
  if (roleEnd <= 0 || macStart <= roleEnd) {
    return false;
  }
  const payload = token.slice(0, macStart);
  const mac = token.slice(macStart + 1);
  const expected = sign(payload);
  if (!safeEqual(mac, expected)) {
    return false;
  }
  const [role, expiresAt] = payload.split(".");
  if (role !== "admin" || Number(expiresAt) < Date.now()) {
    return false;
  }
  return true;
}
