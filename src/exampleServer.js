

var http = require('http')

var server = function(req, res) {

    res.end("Hello World")
}

http.createServer(server).listen(8888);