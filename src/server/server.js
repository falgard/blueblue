const express = require('express');
const path = require('path');
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const app = express();
// const server = require('http').Server(app);
const port = process.env.PORT || 8080;
const devPort = 8081;

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode')

  const config = require('../../webpack.dev.config')
  const compiler = webpack(config)
  const devServer = new WebpackDevServer(compiler, config.devServer)
  devServer.listen(devPort, () => {
    console.log('webpack-dev-server is listening on port', devPort)
  })
}

// app.use('/', express.static(__dirname + '/../../dist', {
//   etag: true,
//   maxAge: oneWeek
// }))

app.use(express.static(path.join(__dirname, '../../src/static')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
})