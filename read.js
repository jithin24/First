var fs = require('fs');
var path = require('path');
//Files are handled by default as Binary using the Buffer stream
//Hence, its important to add the encoding
//var contents = fs.readFileSync("./lib_05/sayings.md", "");
//console.log(contents);

/*
//Read file Asyncrhonously
fs.readFile("./lib_05/sayings.md", "UTF-8", (err, contents) => {
    if(err){
        throw err;
    }
    console.log(contents);
});\
*/


fs.readdir("./lib_05", function(error, files) {
    files.forEach(function(fileName){
        var file = path.join(__dirname, "lib_05", fileName);
        var stats = fs.statSync(file); 
        if(stats.isFile() && fileName !== ".DS_Store"){
            fs.readFile(file, "UTF-8", function(err, contents){
                console.log(contents);
            });
        }
    });
});