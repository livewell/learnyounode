var fs = require('fs');
var path = require('path');

var filteredLS = function (folder, givenExt, callback) {
    fs.readdir(folder, function (err, files) {
        if (err) return console.log(err);

        files.forEach(function (file) {
            if (path.extname(file) === givenExt) {
                console.log(file);
            }
        });

        callback(err,files);
    });
}

exports.filteredLS = filteredLS;