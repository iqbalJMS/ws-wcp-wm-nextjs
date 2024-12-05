const PUBLIC_SUBDIR = '/web/wealth-management';
const SOURCE_PATH = '/web/wealth-management';

module.exports = {
  basePath: SOURCE_PATH,
  assetPrefix: PUBLIC_SUBDIR,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/web/wealth-management/:path*',
        destination: '/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.dev-kjt.id',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost:3000',
      },
      {
        protocol: 'https',
        hostname: 'bri-corpsite.dev-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'cms-drupal.indesc.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};
