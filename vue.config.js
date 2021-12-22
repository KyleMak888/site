const path = require('path')
const process = require('process')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const PRODUCT_REQUEST_URL = 'http://127.0.0.1:5000' // 生产环境请求地址
const DEV_REQUEST_URL = 'http://127.0.0.1:5000' // 测试环境请求地址
const isDev = process.env.NODE_ENV === 'development'
const BASE_URL = isDev ? DEV_REQUEST_URL : PRODUCT_REQUEST_URL

const vueConfig = {
  publicPath: '',
  productionSourceMap: false,

  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))

    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-icon-loader')
      .loader('vue-svg-icon-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
    // .options({
    //   publicPath: process.env.NODE_ENV === 'production' ? 'https://oss.xx.com/img' : './',
    //   name: 'assets/[name].[hash:8].[ext]'
    // })
    config.output.filename('[name].[hash].js').end()
  },

  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8080',
    proxy: {
      '/': {
        target: BASE_URL,
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}

module.exports = vueConfig
