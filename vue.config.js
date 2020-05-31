const { name, description } = require('./package.json')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',

  productionSourceMap: false,

  integrity: true,

  pages: {
    index: {
      entry: 'src/index',
      title: name,
    },
    callback: {
      entry: 'src/callback',
      title: name,
    },
  },

  chainWebpack: config => {
    const html = ([options]) => {
      delete options.template
      options.inject = 'head'
      options.meta = options.meta || {}
      options.meta.viewport = 'width=device-width, initial-scale=1.0'
      options.meta.description = description
      return [options]
    }
    config.plugin('html-index').tap(html)
    config.plugin('html-callback').tap(html)
  },
}
