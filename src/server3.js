
var express = require('express'),
    app = express(),
    pubName = __dirname + '/public'


app.use(express.static(pubName))

app.get ('/', function(req,res) {
    res.send("Hello, World")
})

app.get('/foo', function(req, res){
    res.send("Foo Page")
})


app.listen(8003);