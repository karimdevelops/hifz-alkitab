import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  cacheComponents: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/surah",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
