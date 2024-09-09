var http = require('http');

// My hello world web app

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.write('hello world');
  res.end();
}).listen(3000);
