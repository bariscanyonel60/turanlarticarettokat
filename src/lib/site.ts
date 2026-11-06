const publicSiteUrl = "https://www.turanlarticaret.com";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) {
    return explicit;
  }

  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }

  return publicSiteUrl;
}
