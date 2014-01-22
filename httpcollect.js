var http = require('http');
const BufferList = require('bl');
var cs = require('concat-stream');

var bl = new BufferList();

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  
  response.on('data', function(data) {
    bl.append(data);
  });
  
  response.on('error', console.error);  
  
  response.on('end', function(e) {
    console.log(bl.length);
    console.log(bl.toString());
  });
});


/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(data)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
});
*/