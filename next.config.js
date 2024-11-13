/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "localhost"],
  },
  experimental: {
    // serverActions: true,
  },
};

module.exports = nextConfig;
