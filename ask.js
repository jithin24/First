process.stdout.write("Hello "); 
process.stdout.write("world! My Question?");

var questions = [
    "Your name?",
    "Your fav hobby?", 
    "Favourite programming language?"
];
var answers= [];

function ask(i){
    process.stdout.write(`${questions[i]}  > `);
}
process.stdin.on('data', function(data) {
    //process.stdout.write(data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});
process.on('exit', () => {
    process.stdout.write(`\n Hello ${answers[0]}
                             Your hobby is set as ${answers[1]}
                             Enjoy learning ${answers[2]}`);
});
ask(0);