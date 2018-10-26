console.log(__dirname);
console.log(__filename);
console.log(`Extarct the file name: ${path.basename(__filename)}`);

function grabDetails(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var myVar = 20; 
function testScope(){
    //console.log("What about me? %s" , myVar);
}
testScope();
function printStat(){
    console.log("This gets printed after a Timeout....");
    clearInterval(t);
}
//var t = setInterval(printStat, 5000);
///console.log(process.argv);
//console.log(grabDetails('--user'));
//util.log(" This comes from the utils");
//util.log(v8.getHeapStatistics());