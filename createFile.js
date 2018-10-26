var fs = require('fs');

var md = ` 

    Sample Markdown Title
    ======================

        Include subtitle

        * POINT
        * POINT
        * POINT
        * POINT

`;
fs.writeFile("sample.md", md.trim(), function(err){
    console.log("File created....");
});