const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    'https://digi.mjobi.com/', 
    createProxyMiddleware({
      target: 'https://digi.mjobi.com/customer/login/',
      changeOrigin: true,
    })
  )
}
