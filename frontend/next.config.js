/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Trỏ đến backend server
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
