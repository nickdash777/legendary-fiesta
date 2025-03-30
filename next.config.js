/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["localhost", "georgiacv.com"],
  },
};

module.exports = nextConfig;
