const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [ path.resolve(__dirname, './src') ],
    prependData: '@import "src/assets/scss/variables";'
  },
  images: {
    domains: [
      'images.ctfassets.net', // Contentful images
      'downloads.ctfassets.net', // Contentful images
      'images.unsplash.com' // Storybook placeholder images
    ],
    deviceSizes: [ 82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048 ]
  }
}
