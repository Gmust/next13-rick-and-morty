const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  includePaths: [path.join(__dirname, 'styles')],
  swcMinify: true,
  images: {
    domains: ['rickandmortyapi.com']
  },
};

module.exports = nextConfig;
