/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hwydpxhbpq7msywr.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "placehold.com",
        port: "",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
