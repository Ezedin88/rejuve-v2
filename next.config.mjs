/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'rejuve.md',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'rejuve.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
            // social media urls facebook,linkedin,instagram,twitter,tiktok
            {
                protocol: 'https',
                hostname: 'www.facebook.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.linkedin.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.instagram.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'twitter.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.tiktok.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
