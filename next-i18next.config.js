const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'ta', 'gu', 'mr'],
  },
  localePath: path.resolve('./public/locales'),
};
