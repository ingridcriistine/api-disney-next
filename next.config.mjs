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
            },
            {
                source: "/pagina-server-side",
                destination: "/server-side"
            }
        ]
    },

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.wikia.nocookie.net', 
          },
          {
            protocol: 'https',
            hostname: 'disney.fandom.com', 
          },
        ],
      },
};

export default nextConfig;
