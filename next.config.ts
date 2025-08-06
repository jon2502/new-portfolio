import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wcysachthybjdoosslth.supabase.co',
      }
    ]
  },
};

export default nextConfig;
