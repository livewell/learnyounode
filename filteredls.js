var fs = require('fs');
var path = require('path');

module.exports = function (folder, givenExt, callback) {
    //array to store files found in LS
    var foundFiles = [];


    //reads a directory and return list of files
    fs.readdir(folder, function (err, files) {
        if (err) return callback(err);

        //sorts out files by given extension
        files.forEach(function (file) {
            this.givenExt = "." + givenExt;
            if (path.extname(file) === this.givenExt) {
                foundFiles.push(file);
            }
        }); 
        
        return callback(null, foundFiles);
    });
}
