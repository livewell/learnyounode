var fs = require('fs');

function countLines(err, contents){
    if (err) return console.log(err);
    
    //do something with contents
    var numOfLines = contents.toString().split("\n").length-1;
    console.log(numOfLines);
}

fs.readFile(process.argv[2], countLines);