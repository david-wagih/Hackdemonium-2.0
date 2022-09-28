/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_HOST: "http://localhost:3000",
    DATABASE_URL:
      "postgresql://postgres:postgres@localhost:5432/courierDB?schema=public",
  },
};

module.exports = nextConfig;
