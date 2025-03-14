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
        protocol: 'http',
        hostname: 'localhost:3000',
      },
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.dev-kjt.id',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bri-corpsite.dev-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.stg.service-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'wmg-bri.stg.service-kjt.id',
      },
      {
        protocol: 'https',
        hostname: 'admin-bri-corpsite.stg.service-kjt.id',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};
