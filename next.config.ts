import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ["**/*"],
      };
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)", // áp dụng cho tất cả route
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // cho phép nhúng iframe
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *", 
          },
        ],
      },
    ];
  },
};

export default nextConfig;
