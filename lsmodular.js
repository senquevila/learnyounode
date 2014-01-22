var filter = require('./lsfilter');

filter(process.argv[2], process.argv[3], function(err, list) {
  if (err)
    console.error('err: ' + err);
    
  list.forEach(function(dirname) {
    console.log(dirname);
  });
  
});