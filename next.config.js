/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      fileName: false
    }
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'imagedelivery.net' },
      { protocol: 'https', hostname: 'i.imgur.com' }
    ]
  },
  reactStrictMode: true,
  transpilePackages: ['swiper', 'ssr-window', 'dom7']
}

module.exports = nextConfig

