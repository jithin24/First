var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port : 3000});

wss.on("connection", function(socket){
    socket.send("Welcome to Cyber chat");

    socket.on("message", function(message){
        if(message === 'exit'){
            wss.close();
        }
        else{
                wss.clients.forEach(function(client) {
                client.send(message);
            });
        }
    });
});