/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost", "georgiacv.com"],
  },
};

module.exports = nextConfig;
