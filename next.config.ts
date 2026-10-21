import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static files for Firebase Hosting site `cosmo-us` (project lecien-dev).
  output: "export",

  // Ensure trailing-slash consistency
  trailingSlash: false,

  // Enable strict mode for React
  reactStrictMode: true,

  // Hosting serves files as-is; there is no Next.js image optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
