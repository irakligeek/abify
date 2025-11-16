/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'www.abify.app',
          },
        ],
        destination: 'https://abify.app/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig