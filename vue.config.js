const path = require('path')
const process = require('process')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const PRODUCT_REQUEST_URL = 'http://api.linkendtech.com' // 生产环境请求地址
const DEV_REQUEST_URL = 'http://api.linkendtech.com' // 测试环境请求地址
const isDev = process.env.NODE_ENV === 'development'
const BASE_URL = isDev ? DEV_REQUEST_URL : PRODUCT_REQUEST_URL

const vueConfig = {
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: '8080',
    // proxy: {
    //   '/': {
    //     target: BASE_URL,
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // }
  }
}

module.exports = vueConfig
