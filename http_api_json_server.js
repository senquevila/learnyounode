var http = require('http')
  , url = require('url')
  , port = process.argv[2];
  
var server = http.createServer(function(req, res) {
  res.writeHead (200, {'Content-Type': 'application/json'});
     
  var objDate = url.parse(req.url, true);
  var date = new Date(objDate.query.iso);
  var obj = {};
         
  if (objDate.pathname === '/api/parsetime') {               
    obj.hour = date.getHours();
    obj.minute = date.getMinutes();
    obj.second = date.getSeconds();    
    res.end(JSON.stringify(obj));     
  } else if (objDate.pathname === '/api/unixtime') {
    obj.unixtime = date.getTime();
    res.end(JSON.stringify(obj));
  } else {
    obj = null;
  } 

  if (obj) {
    res.writeHead (200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }  
});

server.listen(Number(port), function(){
  //console.log('Listening port: ' + port);
});


/*****************************
var http = require('http')
var url = require('url')

function parsetime (time) {
 return {
   hour: time.getHours(),
   minute: time.getMinutes(),
   second: time.getSeconds()
 }
}

function unixtime (time) {
 return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
 var parsedUrl = url.parse(req.url, true)
 var time = new Date(parsedUrl.query.iso)
 var result

 if (/^\/api\/parsetime/.test(req.url))
   result = parsetime(time)
 else if (/^\/api\/unixtime/.test(req.url))
   result = unixtime(time)

 if (result) {
   res.writeHead(200, { 'Content-Type': 'application/json' })
   res.end(JSON.stringify(result))
 } else {
   res.writeHead(404)
   res.end()
 }
})
server.listen(Number(process.argv[2]))
******************************/