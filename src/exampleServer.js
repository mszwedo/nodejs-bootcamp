

var http = require('http')

var server = function(req, res) {

    req.on('data', function(chunk) {
        console.log(chunk);
    })
    res.writeHead(200);
    res.end("Hello World")
}

http.createServer(server).listen(8001);