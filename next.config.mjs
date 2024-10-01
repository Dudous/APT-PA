/** @type {import('next').NextConfig} */
const nextConfig = {

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
            }
        ]
    }
};

export default nextConfig;
