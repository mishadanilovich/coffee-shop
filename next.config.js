/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      fileName: false
    }
  },
  images: {
    domains: ['imagedelivery.net', 'i.imgur.com']
  },
  reactStrictMode: true
}

module.exports = nextConfig

