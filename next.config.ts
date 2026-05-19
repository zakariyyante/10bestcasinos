import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow SVG as static assets via next/image
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
