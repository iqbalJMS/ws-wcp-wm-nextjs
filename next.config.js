module.exports = {
  async rewrites() {
    return [
      {
        source: '/wealth',
        destination: '/',
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
    ],
  },
};
