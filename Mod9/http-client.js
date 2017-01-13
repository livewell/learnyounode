var http = require('http');
var bl = require('bl');
const async = require('async');

// list of urls
var urls = [process.argv[2], process.argv[3], process.argv[4]];

async.map(urls, httpGet, function(err, data){
    if (err) return console.log(err);

    data.forEach(function(line){
        console.log(line);
    })
});

function httpGet(url, callback){
    http.get(url, function(response){
        response.pipe(bl(function(err,data){
            if (err) 
                return console.log(err);
        
            data = data.toString();
            callback(null,data);
        }))
    })
};


