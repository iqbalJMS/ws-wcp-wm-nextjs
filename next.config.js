const PUBLIC_SUBDIR = '/web/wealth-management';
const SOURCE_PATH = '/web/wealth-management';

module.exports = {
  basePath: SOURCE_PATH,
  assetPrefix: PUBLIC_SUBDIR,
  reactStrictMode: true,

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
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Allow',
            value: 'GET, POST',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp, credentialless',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};
