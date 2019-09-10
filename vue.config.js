module.exports = {
  configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/mock/20',
        ws: false,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}