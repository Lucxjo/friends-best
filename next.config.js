const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/ugxv4ZrVjC',
        permanent: true
      },
      {
        source: '/reddit',
        destination: 'https://www.reddit.com/r/YoungRoyals/',
        permanent: true
      },
      {
        source: '/watch',
        destination: 'https://www.netflix.com/gb/title/81210762?s=i&trkid=13747225&vlang=en&clip=81459758',
        permanent: true
      },
      {
        source: '/gay-bible',
        destination: 'https://www.goodreads.com/book/show/36256691-the-holy-bible-but-gayer',
        permanent: true
      }
    ]
  }
}
