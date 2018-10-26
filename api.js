var http = require('http');
var data = require('./data/inventory');

var server = http.createServer(function(req, res){
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/json"});
        res.end(JSON.stringify(data));
    }
    else if(req.url === "/inStock"){
        listInStock(res);
    }
    else if(req.url === "/onOrder"){
        listOnBackOrder(res);
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"}); 
        res.end("404 File Not Found"); 
    }
}).listen(3000);
console.log("Listening on port 3000...");

function listInStock(res){
    var inStock = data.filter(function(item) {
        return item.avail === "In stock";
    });
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
        var onOrder = data.filter(function(item) {
        return item.avail === "On back order";
    });
    res.writeHead(200, {"Content-Type": "text/json"});
    res.end(JSON.stringify(onOrder));
}