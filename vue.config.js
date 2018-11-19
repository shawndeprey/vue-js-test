module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3030/api/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}