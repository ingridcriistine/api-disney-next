/** @type {import('next').NextConfig} */

const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",
            },
            {
              source: "/pagina-com-fetch",
              destination: "/fetch-page"
            },
            {
                source: "/pagina-com-axios",
                destination: "/axios-page"
            }
        ]
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.wikia.nocookie.net', 
          },
        ],
      },
};

export default nextConfig;
