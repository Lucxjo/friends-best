
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/ugxv4ZrVjC',
        permanent: true
      }
    ]
  }
}
