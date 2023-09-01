/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["m.media-amazon.com"],
  },
  env: {
    FIREBASE_AUTH: process.env.FIREBASE_AUTH,
  },
};

module.exports = nextConfig;
