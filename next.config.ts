import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optionally ignore TypeScript errors during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
