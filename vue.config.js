const appConfig = require('./src/app/app.config')

module.exports = {
  chainWebpack(config) {
    config.plugin('html').tap(args => {
      args[0].title = appConfig.title
      return args
    })
  },
  css: {
    sourceMap: true
  }
}
