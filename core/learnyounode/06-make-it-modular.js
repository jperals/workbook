var fl = require('./filteredlist');

var dirname = process.argv[2],
    extension = process.argv[3];

fl(dirname, extension, function(err, data) {
    if(err) throw err;
    data.forEach(function(filename) {
        console.log(filename);
    });
});