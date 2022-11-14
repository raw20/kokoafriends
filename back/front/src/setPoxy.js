const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
      '/api',
    createProxyMiddleware({
	    target: "http://3.39.166.0:8080/",
      changeOrigin: true,
            ws : true
    })
  );
};
