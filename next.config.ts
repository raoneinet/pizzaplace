import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
     {
      protocol: "http",
      hostname: "localhost",
      port: "3000",
      pathname: "/**"
     },
     new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/*`)
    ]
  }
};

export default nextConfig;
