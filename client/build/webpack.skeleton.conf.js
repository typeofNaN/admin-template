'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: {
    //指向自己的skeleton.js路径
    app: resolve('../src/entry-skeleton.js')
  },
  output: Object.assign({}, baseWebpackConfig.output, {
    libraryTarget: 'commonjs2'
  }),
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  plugins: []
})
