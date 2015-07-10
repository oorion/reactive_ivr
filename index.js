var express = require('express');
var app = express();
var http = require('http').Server(app);
var _ = require('underscore');

app.use(express.static('assets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
