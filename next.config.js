/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      fileName: false
    }
  },
  images: {
    domains: ['imagedelivery.net']
  },
  reactStrictMode: true
}

module.exports = nextConfig

