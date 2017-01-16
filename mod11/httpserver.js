var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function(request,response){
    var filepath = process.argv[3];
    
    //Opens up readable stream
    var readStream = fs.createReadStream(filepath);

    readStream.on('open', function(){
        readStream.pipe(response);
    });

    readStream.on('error', function(err){
        console.log(err);
    })
});

server.listen(process.argv[2]);