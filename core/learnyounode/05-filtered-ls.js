var fs = require('fs'),
    path = require('path');

var dirname = process.argv[2],
    extension = process.argv[3],
    filteredList = [];

fs.readdir(dirname, function(err, list) {

    if(err) throw err;

    for(var i = 0, n = list.length; i < n; i++) {
        var filename = list[i];
        if(path.extname(filename) === '.' + extension) {
            console.log(filename);
        }
    }

});

