/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  // assetPrefix: '/public/assets/imgs',
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
}

module.exports = nextConfig
