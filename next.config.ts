import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'mc-heads.net/**',
              port: '',
              search: '',
          },
      ],
  }
};

export default nextConfig;
