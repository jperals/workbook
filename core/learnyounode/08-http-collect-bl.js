var http = require('http'),
    bl = require('bl')

var url = process.argv[2]

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        str = data.toString()
        console.log(str.length)
        console.log(str)
    }))
})