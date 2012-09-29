

var request = require('request'),
    fs = require('fs');


request.get('http://substack.net/images/node_turtle_plume.png')
    .pipe(fs.createWriteStream("turtle_plume.png"));


