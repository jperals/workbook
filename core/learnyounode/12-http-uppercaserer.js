var http = require('http'),
    map = require('through2-map'),
    portNumber = process.argv[2],
    filepath = process.argv[3]

var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }
})

server.listen(portNumber)