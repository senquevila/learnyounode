var filter = require('./lsfilter');

filter(process.argv[2], process.argv[3], function(err, list) {
  if (err)
    console.error('err: ' + err);
    
  list.forEach(function(dirname) {
    console.log(dirname);
  });
  
});

/******************
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
 if (err)
   return console.error('There was an error:', err)

 list.forEach(function (file) {
   console.log(file)
 })
})
********************/