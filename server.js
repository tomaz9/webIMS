var express = require('express');
var server  = express();

var PORT = process.env.PORT || 3000;

server.get('/', function(req, res) {
    res.send("It's working!");
});

server.listen(PORT, function() {
    console.log("Server is up and running!");
});