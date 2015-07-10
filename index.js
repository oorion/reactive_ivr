var app = require('express')();
var http = require('http').Server(app);
var _ = require('underscore');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/js/react_ivr.js', function(req, res){
  res.sendFile(__dirname + '/js/react_ivr.js');
});

app.get('/js/react.js', function(req, res){
  res.sendFile(__dirname + '/js/react.js');
});

app.get('/js/JSXTransformer.js', function(req, res){
  res.sendFile(__dirname + '/js/JSXTransformer.js');
});

app.get('/css/styles.css', function(req, res){
  res.sendFile(__dirname + '/css/styles.css');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
