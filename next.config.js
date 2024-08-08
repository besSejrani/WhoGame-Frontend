/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

// =======================================================================================

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ioloco.s3.eu-central-1.amazonaws.com",
        pathname: "/uploads/**/**",
      },
    ],
  },
  poweredByHeader: false,
};

module.exports = withVanillaExtract(nextConfig);
