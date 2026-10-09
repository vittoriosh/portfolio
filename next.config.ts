import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The road map page was removed; old links land on About.
  async redirects() {
    return [{ source: "/roadmap", destination: "/about", permanent: true }];
  },
};

export default nextConfig;
