/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rejuve.md',
                port: '',
                pathname: '/wp-content/uploads/**',
            }
        ]
    }
};

export default nextConfig;
