'use strict'

var env = require('./env')
var result = []

if (env.HOT){
  result = [
    // 'webpack-hot-middleware/client'

    // WebpackDevServer host and port
    'webpack-dev-server/client?http://localhost:' + env.PORT,
    'webpack/hot/only-dev-server'
  ]
}

module.exports = result.concat([
  './index.js'
])
