import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", 
        hostname: "images.unsplash.com", 
        port: "", // Leave empty unless a specific port is used
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;