/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "portfolio-caoanhvu.onrender.com"],
    minimumCacheTTL: 60,
    // unoptimized: true
  },
  compress: true,
  swcMinify: true,
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/blog/:id",
        destination: "/blogs/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
