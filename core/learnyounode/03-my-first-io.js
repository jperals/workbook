var fs = require('fs');

var filename = process.argv[2];

var buffer = fs.readFileSync(filename);

var str = buffer.toString();

var arr = str.split('\n');

var nNewlines = arr.length - 1;

console.log(nNewlines);