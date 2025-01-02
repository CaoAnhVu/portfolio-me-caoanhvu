/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "blog-backend-production.up.railway.app"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://blog-backend-production.up.railway.app/api/:path*", // Trỏ đến backend server
      },
    ];
  },
  async redirects() {
    // Thêm phần này
    return [
      {
        source: "/blog/:id",
        destination: "/blogs/:id",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
