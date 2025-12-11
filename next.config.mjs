/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.outletexpense.xyz',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'outletexpense.xyz',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'outletexpense.com',
      },
      {
        protocol: 'https',
        hostname: 'www.brothersmobilebd.com',
      },
      {
        protocol: 'https',
        hostname: 'www.appledaddybd.com',
      },
      {
        protocol: 'https',
        hostname: 'www.perfectgadgetbd.com',
      },
      {
        protocol: 'https',
        hostname: 'taibamart.com',
      },
      {
        protocol: 'https',
        hostname: 'www.gpixelbd.com',
      },
      {
        protocol: 'https',
        hostname: 'www.emuscreation.com',
      },
      {
        protocol: 'https',
        hostname: 'appledreambd.com',
      },
      {
        protocol: 'https',
        hostname: 'www.applenationbd.com',
      },
    ],
  },
};

export default nextConfig;
