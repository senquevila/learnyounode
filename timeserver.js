var net = require('net');
var port = process.argv[2];
var date = new Date();

var server = net.createServer(function(socket) {
  var anio = date.getFullYear().toString();  
  var mes = (date.getMonth() + 1).toString();  
  var dia = date.getDate().toString();    
  var hora = date.getHours().toString();  
  var minutos = date.getMinutes().toString(); 
  
  mes = (mes.length === 1) ? "0" + mes : mes;
  dia = (dia.length === 1) ? "0" + dia : dia;
  minutos = (minutos.length === 1) ? "0" + minutos : minutos;
  
  var data = anio + '-' + mes + '-' + dia + ' ' + hora + ':' + minutos + '\n';

  socket.end(data);
});

server.listen(port);

/**********************
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})
server.listen(Number(process.argv[2]))
***********************/