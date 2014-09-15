var http = require('http'),
    bl = require('bl')

var urls = [process.argv[2],
            process.argv[3],
            process.argv[4]],
    lines = [],
    urlIndex = 0,
    nCompleted = 0

var printLines = function() {
    lines.forEach(function(line) {
        console.log(line)
    })
}

var getAsync = function(url, index, callback) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if(err) throw err
            str = data.toString()
            lines[index] = str
            nCompleted ++
            if(nCompleted == urls.length) {
                callback()
            }
        }))
    })
}

urls.forEach(function(url) {
    getAsync(url, urlIndex, function() {
        printLines()
    })
    urlIndex++
})
