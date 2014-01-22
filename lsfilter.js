var fs = require('fs');
var path = require('path');
//var regex = new RegExp('\\.' + filterStr + '$');

module.exports = function (dir, filtroStr, callback) {  
  fs.readdir (dir, function (err, list) {
    if (err)
      return callback(err);
      
    list = list.filter(function (file) {
      //return regex.test(file);
      return (path.extname(file) === '.' + filtroStr);
    });
    
    callback (null, list);
  });
};