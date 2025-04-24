import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,   // ⚠️ يتجاهل كل أخطاء TS
  },
  eslint: {
    ignoreDuringBuilds: true,  // ⚠️ لا يفحص ESLint في build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/media/**',
      },
    ],
  },
};
/** @type {import('next').NextConfig} */
module.exports = nextConfig;
export default nextConfig;
