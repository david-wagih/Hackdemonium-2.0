/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_HOST: "http://localhost:3000",
  },
};

module.exports = nextConfig;
