var fs = require('fs'),
    path = require('path');

module.exports = function (dirname, extension, callback) {

    fs.readdir(dirname, function(err, list) {

        if(err) return callback(err);

        var filteredList = [];

        for(var i = 0, n = list.length; i < n; i++) {
            var filename = list[i];
            if(path.extname(filename) === '.' + extension) {
                filteredList.push(filename);
            }
        }

        callback(null, filteredList);

    });

};
