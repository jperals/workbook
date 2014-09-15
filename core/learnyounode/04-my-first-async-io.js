var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, function(err, data) {

    if(err) throw err;

    var str = data.toString();

    var arr = str.split('\n');

    var nNewlines = arr.length - 1;

    console.log(nNewlines);

});

