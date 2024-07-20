/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sakuracollection.com.tr',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/w500/**',
      },
    ],
  },
    env: {
      API_KEY: '445cc05f969b880a5fb966d592366db0',
    },
  };
  
  export default nextConfig;
  