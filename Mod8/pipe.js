var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('sample.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('output.txt'));