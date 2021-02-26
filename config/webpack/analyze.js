const { merge } = require('webpack-merge')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const prod = require('./prod')

module.exports = merge(prod, {
  plugins: [new BundleAnalyzerPlugin()]
})
