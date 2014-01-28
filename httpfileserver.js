var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var server = http.createServer(function(request, response){
  request = fs.createReadStream(path);
});

server.listen(Number(port));
console.log('Escuchando el puerto: ' + port);