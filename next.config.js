const PUBLIC_SUBDIR = '/web/wealth-management';
const SOURCE_PATH = '/web/wealth-management';

module.exports = {
  basePath: SOURCE_PATH,
  assetPrefix: PUBLIC_SUBDIR,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/wealth-management/:path*',
        destination: '/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.dev-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'craftypixels.com',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
      },
    ],
  },
};
