var http = require('http')
  , fs = require('fs')
  , port = process.argv[2]
  , path = process.argv[3]

var server = http.createServer(function(request, response){
  fs.createReadStream(path).pipe(response);
});

server.listen(Number(port));
console.log('Escuchando el puerto: ' + port);



/***************
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  fs.createReadStream(process.argv[3]).pipe(res)
})
server.listen(Number(process.argv[2]))
*****************/