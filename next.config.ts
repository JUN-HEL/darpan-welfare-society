import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/our-work", destination: "/work", permanent: true },
      { source: "/stories/:path*", destination: "/gallery", permanent: true },
      { source: "/impact", destination: "/work", permanent: true },
      { source: "/get-involved", destination: "/contact", permanent: true },
      { source: "/donate", destination: "/contact#support", permanent: true },
      { source: "/transparency", destination: "/about", permanent: true },
      { source: "/terms", destination: "/privacy", permanent: true },
      { source: "/credits", destination: "/privacy", permanent: true },
      { source: "/work/:slug", destination: "/work", permanent: true },
    ];
  },
};

export default nextConfig;
