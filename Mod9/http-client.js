var http = require('http');
var bl = require('bl');
const async = require('async');


var urls = [process.argv[2], process.argv[3], process.argv[4]];

async.map