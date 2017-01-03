var fs = require('fs');
var path = require('path');

function listFiles(err, files){
    if (err) return console.log(err);

    files.forEach(function(file){
        var ext = path.extname(file);
        var ext1 = "." + process.argv[3];

        if (ext === ext1) {
            console.log(file);
        }
    });
}

fs.readdir(process.argv[2], listFiles);