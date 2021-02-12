const path = require('path')
const nextConfig = {
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig
