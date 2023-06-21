const path = require('path');
/** @type {import('next').NextConfig} */

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "global.scss";`,
    CSSImportRule: true,
  },
};
