/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT.replace('https://', '')],
  },

  reactStrictMode: true,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async rewrites() {
    return [
      {
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/rest/v1/insights?apikey=${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}`,
        source: '/build-insights',
      },
      {
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/rest/v1/managers?apikey=${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}&order=company`,
        source: '/build-managers',
      },
      {
        destination: `${process.env.NEXT_PUBLIC_SUPABASE_ENDPOINT}/rest/v1/cleaners?apikey=${process.env.NEXT_PUBLIC_SUPABASE_API_KEY}&order=company`,
        source: '/build-cleaners',
      },
    ];
  },
  swcMinify: true,
};

module.exports = nextConfig;
