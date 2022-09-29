/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_HOST: "https://goalden.vercel.app",
  },
};

module.exports = nextConfig;
