
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    qualities: [75, 85, 90, 95, 100],

    formats: ["image/avif", "image/webp"],

    deviceSizes: [
      640, 750, 828, 1080, 1200,
      1440, 1920, 2560, 3840,
    ],

    imageSizes: [
      32, 48, 64, 96, 128, 256, 384,
    ],
  },
};

export default nextConfig;

