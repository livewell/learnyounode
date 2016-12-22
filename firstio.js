var fs = require('fs');

var file = fs.readFileSync(process.argv[2]).toString();
var fileByLine = file.split("\n");
var numOfLines = fileByLine.length-1;

console.log(numOfLines);