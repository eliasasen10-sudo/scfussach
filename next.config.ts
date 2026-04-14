import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.ligaportal.at",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "scfussach.at",
        pathname: "/fileadmin/**",
      },
    ],
  },
};

export default nextConfig;
