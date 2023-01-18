/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/',
        destination: '/grumpy_chat',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
