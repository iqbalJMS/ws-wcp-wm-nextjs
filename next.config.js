const PUBLIC_SUBDIR = '/web/wealth-management';
const SOURCE_PATH = '/web/wealth-management';

module.exports = {
  basePath: SOURCE_PATH,
  assetPrefix: PUBLIC_SUBDIR,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: SOURCE_PATH,
        permanent: true,
        basePath: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: `${SOURCE_PATH}/:path*`,
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
        hostname: 'admin-bri-corpsite.stg.service-kjt.id',
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
        hostname: 'admin-bri-corpsite.dev-kjt.id',
      },
      {
        protocol: 'http',
        hostname: 'ms-wcp-aether-drupal:5000',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};
