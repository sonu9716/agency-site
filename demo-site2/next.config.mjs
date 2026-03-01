/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/demo2',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
