import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['pdfjs-dist'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
