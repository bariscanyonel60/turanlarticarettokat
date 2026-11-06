import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "turanlarticaret.com" }],
        destination: "https://www.turanlarticaret.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/ddm7ouuwk/**",
        search: "",
      },
    ],
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
