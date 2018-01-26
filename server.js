var express = require('express');
var server  = express();
server.set('view engine', 'ejs');

var PORT = process.env.PORT || 3000;

server.get('/', function(req, res) {
    res.render('index', {});
});

server.listen(PORT, function() {
    console.log("Server is up and running!");
});