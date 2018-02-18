const express = require('express');
const morgan = require('morgan');
const path = require('path');

var app = express();
var server = require('http').Server(app);
port = process.env.PORT || 8080;

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  // res.send("Blå blå är kärleken - 28 Juli 2018 / Cissi & Micke");
  res.sendFile(path.join(__dirname + '/index.html'));
});

// use morgan to log requests to the console
app.use(morgan('dev')); 

app.use(express.static(path.join(__dirname + '/static')));

server.listen(port);
console.log('http://localhost:' + port);