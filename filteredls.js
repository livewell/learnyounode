var fs = require('fs');
var path = require('path');

var givenExt = "." + process.argv[3];
var folder = process.argv[2];

fs.readdir(folder, function (err, files) {
    if (err) return console.log(err);

    files.forEach(function (file) {
        if (path.extname(file) === givenExt) {
            console.log(file);
        }
    });
});

