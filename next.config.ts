import type { NextConfig } from "next";

// On GitHub Pages the site lives under /<repo-name>; the deploy workflow sets BASE_PATH.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
