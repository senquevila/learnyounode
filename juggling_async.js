var http = require('http');
const BufferList = require('bl');
var cs = require('concat-stream');

var bl1 = new BufferList();
var bl2 = new BufferList();
var bl3 = new BufferList();
var fin1 = false
  , fin2 = false
  , fin3 = false;

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  
  response.on('data', function(data) {
    bl1.append(data);
  }).on('end', function(e) {
    http.get(process.argv[3], function(response) {
      response.setEncoding('utf8');
      
      response.on('data', function(data) {
        bl2.append(data);
      }).on('end', function(e) {
        http.get(process.argv[4], function(response) {
          response.setEncoding('utf8');
          
          response.on('data', function(data) {
            bl3.append(data);
          }).on('end', function(err) {
            console.log(bl1.toString());
            console.log(bl2.toString());
            console.log(bl3.toString());
          });      
        });     
      });
    });   
  });
});


/***********************
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(data)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
**********************/