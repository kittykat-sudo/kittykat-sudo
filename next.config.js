// @ts-check

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Temporarily disable ESLint during builds to allow deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow builds to complete even with type errors
    ignoreBuildErrors: true,
  },
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  // Remove deprecated experimental options
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: !isProduction,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;