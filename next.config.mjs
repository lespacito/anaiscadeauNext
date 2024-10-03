/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Correspondance pour toutes les routes API
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://main--celadon-paletas-021e4b.netlify.app/",
          }, // Remplacez par votre origine réelle
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, DELETE, PATCH, POST, PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
      {
        // Correspondance pour la route /login
        source: "/login",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://main--celadon-paletas-021e4b.netlify.app/",
          }, // Remplacez par votre origine réelle
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, OPTIONS", // Ajoutez les méthodes HTTP que vous souhaitez autoriser
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
