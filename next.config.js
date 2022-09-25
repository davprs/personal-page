/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['it'],
    defaultLocale: 'it',
  },
  images: {
    domains: ['vqqtkvhdrbzajolpzbwg.supabase.co', 'www.bing.com'],
    minimumCacheTTL: 60
  }
}

module.exports = nextConfig
