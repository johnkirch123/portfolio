const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = createProxyMiddleware('/api', {
  target: 'http://localhost:5000 '
});
