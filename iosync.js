var fs = require('fs');
var buf = require('buffer');
var str = [];

buf = fs.readFileSync(process.argv[2]);
str = buf.toString().split('\n');
console.log(str.length-1);