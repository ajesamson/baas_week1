var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var dishRouters = require('./dishRouter');
var promoRouters = require('./promoRouter');
var leaderRouters = require('./leaderRouter');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use('/dishes', dishRouters.dishRoute(express, bodyParser));
app.use('/promotions', promoRouters.promoRoute(express, bodyParser));
app.use('/leadership', leaderRouters.leaderRoute(express, bodyParser));

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});