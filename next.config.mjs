/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/assets/img/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
