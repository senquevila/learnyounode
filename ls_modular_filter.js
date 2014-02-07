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

/**********************
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}
***********************/