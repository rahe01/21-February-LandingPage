import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // keep static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ disables Image Optimization for static export
  },
};

export default nextConfig;