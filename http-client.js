var http = require('http');

module.exports = function (url, callback) {
    
    //http.get() needs data,end,error to be implemented
    http.get(url, function (response) {
        var body = "";
        response.setEncoding("utf8");

        //event for listening to data 
        response.on('data', function (data) {
            //builds data based on http request
            body = body + data + "\n";
        });

        //event for listening to end
        response.on('end', function () {
            try {
                //if everything is good, call callback returning parsed data
                callback(null, body);
            }
            catch (e) {
                callback("Issue with parsing data" + e.messages);
            }
        });

        //event for listening to errors
        response.on('error', function (e) {
            callback(error);
        });
    })
};