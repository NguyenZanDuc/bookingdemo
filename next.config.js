/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't-cf.bstatic.com',
        port: '',
        pathname: '/design-assets/assets/v3.68.0/images-flags/Vn@3x.png',
      },{
        protocol: 'https',
        hostname: 'q-xx.bstatic.com',
        port: '',
        pathname: '/xdata/images/city/170x136/688844.jpg',
      },
    ],
  },
}

module.exports = nextConfig
//https://t-cf.bstatic.com/design-assets/assets/v3.68.0/images-flags/Vn@3x.png
//https://q-xx.bstatic.com/xdata/images/city/170x136/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=