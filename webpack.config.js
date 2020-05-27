const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { name } = require('./package.json')

const create = {
  rule: (test, use, exclude = /node_modules/) => ({ test, use, exclude })
}

module.exports = (env, { mode = 'production' } = {}) => ({
  mode,
  module: {
    rules: [
      create.rule(/\.tsx?$/, 'ts-loader'),
      create.rule(/\.vue$/, 'vue-loader')
    ],
  },
  output: {
    publicPath: mode !== 'production' ? '/' : `/${name}/`
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: name,
      meta: {
        viewport: 'width=device-width, initial-scale=1.0'
      }
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  watch: mode !== 'production',
})
