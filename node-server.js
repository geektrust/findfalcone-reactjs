var http = require('http');
var express = require('express');

process.on('uncaughtException', function(err) {
  console.log(err);
});

var server = express();

server.use(express.static(__dirname));

server.listen(4040, function() { 
    console.log('listening on port 4040');     
});