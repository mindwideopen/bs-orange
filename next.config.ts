import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const githubPagesBasePath = "/bs-orange";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  assetPrefix: isProduction ? githubPagesBasePath : undefined,
  basePath: isProduction ? githubPagesBasePath : undefined,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
