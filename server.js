var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", 
        function(err, resContent){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(resContent);
        });
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"}); 
        res.end("404 File Not Found");
    }
});

server.listen(3000); 
console.log("Server is listening on PORT 3000");