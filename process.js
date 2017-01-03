var ls = require('./filteredls.js');

//variables to pass to module
var folder = process.argv[2];
var givenExt = "." + process.argv[3];

ls.filteredLS(folder, givenExt, function(err, files){
    if (err) return console.log(err);

    files.forEach(function(file){
        console.log(file);
    });
});
