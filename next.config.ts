import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    root: path.join(__dirname),
  },
  // Allow phone/tablet testing on your LAN IP during `pnpm dev`
  allowedDevOrigins: ['192.168.1.102'],
};

export default nextConfig;
