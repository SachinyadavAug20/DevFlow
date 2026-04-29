import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages:['pino','pino-pretty'],
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port:"",
      }
    ]
  }
};

export default nextConfig;
