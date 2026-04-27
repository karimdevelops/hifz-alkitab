import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/surahs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
