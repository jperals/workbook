var http = require('http')

var url = process.argv[2]

http.get(url, function(response) {
    var str = ''
    response.setEncoding('utf8')
    response.on("data", function(data) {
        str += data
    })
    response.on("end", function() {
        console.log(str.length)
        console.log(str)
    })
})