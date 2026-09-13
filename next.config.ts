import type { NextConfig } from "next";

const isGithubPages =
    process.env.DEPLOY_TARGET === "github-pages";

const githubPagesBasePath = "/bs-orange";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  compiler: {
    styledComponents: true,
  },

  basePath: isGithubPages
      ? githubPagesBasePath
      : undefined,

  assetPrefix: isGithubPages
      ? githubPagesBasePath
      : undefined,
};

export default nextConfig;