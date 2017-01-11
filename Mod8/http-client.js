var http = require('http');
var bl = require('bl');

module.exports = function app1(url, callback) {
    http.get(url, function (response) {
        response.pipe(new bl(function(err, data){
            if (err) return callback(err);
            data = data.toString();
            callback(null, data.length);
            callback(null, data);
        }))
    })
};