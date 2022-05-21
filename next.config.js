/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  baseUrl: "./src",
  images: {
    domains: ["www.gef.co"],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig
