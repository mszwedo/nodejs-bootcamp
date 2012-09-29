
var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    pubDir = __dirname + "/public";

var server = function(req, res) {

    var pathName = url.parse(req.url).pathname;

    fs.readFile(pubDir + pathName, function (err, data)
    {
        if (err) {
            res.writeHead(404);
            res.end("404 not found");
        }
        else {
            res.writeHead(200);
            res.end(data);
        }
    })
}

http.createServer(server).listen(8002);