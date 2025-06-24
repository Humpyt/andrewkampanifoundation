/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'localhost',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.example.com',
      },
    ],
  },
  experimental: {
    isrMemoryCacheSize: 50,
    incrementalCacheHandlerPath: './cache-handler.js',
  },
}

export default nextConfig
