/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
        {
          protocol: "http",
          hostname: "magadmin.raccoonstech.com",
        },
      ],
    },
    env: {
      API_KEY:"80KOnTJqjAxAOnQlf1bDmcGQh1z4newLEcQdWbyC780lahO86WKe7UpoQ9h8DiwD",
      BASE_URL:"http://magadmin.raccoonstech.com/api"
    }
};

export default nextConfig;
