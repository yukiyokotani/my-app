/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://golang:8080',
  //     // pathRewrite: {
  //     //   '^/api': '',
  //     // },
  //     changeOrigin: true,
  //   })
  // );

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://golang:${port}`);
  });
});
