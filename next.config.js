const { i18n } = require('./next-i18next.config');

module.exports = {
  swcMinify: true,
  i18n,
  reactStrictMode: true,
  rewrites: [
    {
      source: '/fonts/ubuntu',
      destination: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap'
    },
    {
      source: '/fonts/goog/api',
      destination: 'https://fonts.googleapis.com'
    },
    {
      source: '/fonts/goog/static',
      destination: 'https://fonts.gstatic.com'
    },
  ]
}
