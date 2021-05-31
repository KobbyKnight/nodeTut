const readline = require ('readline');
// calling the input and output interface
const rl = readline.createInterface({input: process.stdin,output: process.stdout});

/*rl.question("What is your Name? \n",(userInput)=>{
    if (userInput!=null) {        
        console.log(userInput);
    }
});*/
//generate random numbers for the question

let a = Math.floor((Math.random()*10)+1);
let b = Math.floor((Math.random()*10)+1);
let answer = a + b;
rl.question(`What is ${ a } + ${ b }? \n`,(userInput)=>{
    if (userInput.trim() == answer) {
        rl.close();
    } else {
        rl.setPrompt(`Your answer of ${userInput} is incorrect, Try again \n`);
        rl.prompt();
        rl.on("line",(userInput)=>{
            if (userInput.trim() == answer) {
                rl.close();
            }else{
                rl.setPrompt(`Your answer of ${userInput} is still incorrect, Try again \n`);
                rl.prompt();
            }
        });
    }
});

/**
 * readline is an instance of EventEmitter class
 * hence it emits an event
 */
rl.on("close",()=>{
    console.log("Correct Answer!!!");
});