var net = require('net');

function createDate(){
    var date = new Date();
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    let customDate = date.getFullYear() + "-" 
                    + month + "-" 
                    + day + " " 
                    + date.getHours() + ":" 
                    + date.getMinutes() + "\n"; 

    return customDate;
}

var server = net.createServer(function (socket){              
   socket.write(createDate());
   socket.end();
});

server.listen(process.argv[2]);