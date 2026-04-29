import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
