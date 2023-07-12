/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['vqqtkvhdrbzajolpzbwg.supabase.co', 'www.bing.com'],
  }
  ,
  rewrites: async () => [
    {
      source: "/digital-garden/:slug*",
      destination: "/api/serveDigitalGarden?:slug*"
    }
    ],
    async redirects(){
    return [

      {
        source: "/digital-garden/Capitalismo",
        destination: "/digital-garden/Capitalismo/index.html",
        permanent:true
      },{
        source: "/digital-garden/Legalizzazione-droghe",
        destination: "/digital-garden/Legalizzazione-droghe/index.html",
        permanent:true
      }
    ]
  }
}

module.exports = nextConfig
