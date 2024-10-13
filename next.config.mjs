/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "anaiscadeau.vercel.app",
        port: "",
        pathname: "_next/static/media/**",
      },
    ],
  },
};

export default nextConfig;
