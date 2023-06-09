/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [process.env.IMAGE_URL],
  },
  compress: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    IMAGE_URL: process.env.IMAGE_URL,
    IFRAME_URL: process.env.IFRAME_URL,
    SOCKET: process.env.SOCKET,
    ALGOLIA_PROVIDER_APPLICATION_ID:
      process.env.ALGOLIA_PROVIDER_APPLICATION_ID,
    ALGOLIA_PROVIDER_ADMIN_API_KEY: process.env.ALGOLIA_PROVIDER_ADMIN_API_KEY,
    DEVELOPMENT_API: process.env.DEVELOPMENT_API,
  },
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};

module.exports = nextConfig;
