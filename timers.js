var waitTime = 5000; 
var currTime = 0; 
var waitInterval = 100; 
var percentWait = 0;

function writeWaitingPercentage(p){
    process.stdout.clearLine(); 
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting...${p}%`);
}

var interval = setInterval(() => {
    currTime += waitInterval; 
    percentWait = Math.floor(currTime/waitTime * 100);
    writeWaitingPercentage(percentWait);
}, waitInterval);

setTimeout(() => {
    clearInterval(interval); 
    writeWaitingPercentage(100); 
    console.log("\nDone");
}, waitTime);

process.stdout.write("\n"); 
writeWaitingPercentage(percentWait);