const { name, description } = require('./package.json')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',

  chainWebpack: config => {
    config.plugin('html').tap(() => [{
      title: name,
      inject: 'head',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0',
        description,
      },
    }])
  },
}
