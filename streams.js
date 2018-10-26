var fs = require('fs');
/*
fs.readFile("./lib_05/chat.log", "UTF-8", 
function(err, chatlog){
    console.log(`File Read Lenght ${chatlog.length}`);
});
console.log("Read File In Progress...");
*/

var stream = fs.createReadStream("./lib_05/chat.log", "UTF-8");
var data = "";

stream.once("data", function(){
    console.log("\n Started with the File read.... \n");
});

stream.on("data", function(chunk){
    process.stdout.write (` Chunk: ${chunk.length} | `);
    data = data + " ~ " + chunk; 
});

stream.on("error", function(err){
    console.log("Caught an Error with the Process execution " + err);
})

stream.on("end", function(){
    console.log(`

    Finished reading File of length ${data.length} `);
});