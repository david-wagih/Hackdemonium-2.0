/** @type {import('next').NextConfig} */
// Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  env: {
    NEXT_PUBLIC_HOST: "https://goalden.vercel.app",
  },
};

// Compare this snippet from /DockerFile:
module.exports = nextConfig;
