// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig  = {
  i18n: {
    locales: ['en', 'hi', 'gu', 'ta', 'mr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
