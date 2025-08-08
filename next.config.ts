// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


// const nextConfig = {
//   i18n: {
//     locales: ['en', 'hi', 'fr', 'de', 'ar'], 
//     defaultLocale: 'en',
//   }
// };

// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');
module.exports = withNextIntl({});
