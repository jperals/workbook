var http = require('http'),
    url = require('url'),
    portNumber = process.argv[2],
    filepath = process.argv[3]

var getParsedTime = function(isoFormattedDate) {
    var date = new Date(isoFormattedDate)
    return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    }
}

var getUnixTime = function(isoFormattedDate) {
    var date = new Date(isoFormattedDate)
    return {
        "unixtime": date.getTime()
    }
}

var server = http.createServer(function (request, response) {
    if (request.method !== 'GET') {
        return "Only GET requests are allowed"
    }
    else {
        var parsedUrl = url.parse(request.url, true),
            responseObject
        switch(parsedUrl.pathname) {
            case '/api/parsetime':
                responseObject = getParsedTime(parsedUrl.query.iso)
                break
            case '/api/unixtime':
                responseObject = getUnixTime(parsedUrl.query.iso)
                break
        }
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(responseObject))
    }
})

server.listen(portNumber)