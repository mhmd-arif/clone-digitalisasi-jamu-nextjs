/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
            },
            {
                protocol: "https",
                hostname: "i.postimg.cc",
            },
        ],
        // domains: ["i.postimg.cc"],
    },
};

module.exports = nextConfig;
