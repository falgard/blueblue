var express     = require('express');
var morgan      = require('morgan');

var app = express();
var server = require('http').Server(app);
port = process.env.PORT || 8080;

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.send("Blå blå är kärleken - 28 Juli 2018");
});

// use morgan to log requests to the console
app.use(morgan('dev')); 

server.listen(port);
console.log('http://localhost:' + port);