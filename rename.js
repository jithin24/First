var fs = require('fs');
/*
fs.renameSync("./lib_05/project-config.js", "./lib_05/project-config.json");
console.log(" File renamed successfully"); 

fs.rename("./lib_05/notes.md", "./notes.md", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File moved Successfully...")
    }
});
*/


//Remove files synchronously
try{
    fs.unlinkSync('./Ben10.md');
    console.log("File === REMOVED === successfully");
}catch(e){
    console.log(e);
}