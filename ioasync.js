var fs = require('fs');
var buf = require('buffer');
var str;

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if (err) throw err;
  
  console.log(data.split('\n').length - 1);
});