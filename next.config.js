/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/grumpy-chat',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
