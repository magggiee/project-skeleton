var app = require('../app');
var http = require('http');

var port = normalizePort('3001');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

module.exports = server
