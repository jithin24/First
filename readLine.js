var path = require('path');
var util = require('util');
var v8 = require('v8');
var readLine = require('readline');
var person = {
    name: '',
    game: []
};
var rl = readLine.createInterface(process.stdin, process.stdout);
rl.question("What's your favourite player? ", function(answer){
    person.name = answer;
    rl.setPrompt(`What does ${person.name} play? `);
    rl.prompt();
    rl.on('line', (gaming) => {
        if(gaming.toLowerCase().trim() === 'exit'){
            rl.close();
        }
        else{
        person.game.push(gaming); 
        rl.setPrompt(`What else does ${person.name} play?  Type exit to leave\n` );
        rl.prompt();
        }
    });
});

rl.on('close', () => {
    console.log("%s is an awesome player who likes %j", 
            person.name, person.game);
    process.exit();
});