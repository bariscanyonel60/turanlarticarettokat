export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (explicit) {
    return explicit;
  }

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim().replace(
    /\/$/,
    "",
  );
  if (productionHost) {
    return `https://${productionHost}`;
  }

  return "http://localhost:3000";
}
