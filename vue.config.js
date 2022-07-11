const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 项目标题
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '短相思兮无穷极'
        return args
      })
    // svg图标
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  // 跨域代理
  devServer: {
    proxy: {
      '/jiujiu': {
        target: 'http://ihrm.itheima.net/',
        changeOrigin: true,
        pathRewrite: { '^/jiujiu': '' }
      }
    }
  }
})
