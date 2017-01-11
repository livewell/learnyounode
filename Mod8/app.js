var app = require('./http-client');

var url = process.argv[2];

app(url, function(err, doneData){
    if (err){
        return console.log("found an error with data");
    }
    console.log(doneData);
})