/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{protocol: "https", hostname: "rickandmortyapi.com"}]
    },

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home"
            },
            {
                source: "/matematicas",
                destination: "/maths"
            },
            {
                source: "/geral",
                destination: "/general-function"
            },
            {
                source: "/cartoes",
                destination: "/cards"
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
                destination: "/server-page"
            }
        ]
    }
};

export default nextConfig;
