import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 🚀 skips linting in production build (e.g. Vercel)
  },
};

export default nextConfig;
