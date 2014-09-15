var fs = require('fs'),
    http = require('http'),
    portNumber = process.argv[2],
    filepath = process.argv[3]

var server = http.createServer(function (req, res) {
    var src = fs.createReadStream(filepath)
    src.pipe(res)
})

server.listen(portNumber)