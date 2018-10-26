var fs = require('fs');
//this is a synchronous reading of the Dir
//var files = fs.readdirSync('.');
//console.log (files);

//Asynchronous version
var files = fs.readdir('.', (err, files) => {
    if(err){

    }
    console.log(files);
});
console.log("Reading the file list...");
