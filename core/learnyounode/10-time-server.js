var net = require('net'),
    strftime = require('strftime'),
    portNumber = process.argv[2]

var server = net.createServer(function (socket) {
    var date = new Date();
    var formattedDate = strftime('%Y-%m-%d %H:%M', date)
    socket.end(formattedDate + '\n')
})

server.listen(portNumber)