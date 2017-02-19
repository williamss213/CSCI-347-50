main();

function main()
{
    // Function array setup
    var functions = [];
    functions[0] = function () { console.log("Hello!"); };
    functions[1] = function () { console.log("Hola!"); };
    functions[2] = function () { console.log("Guten Tag!"); };
    functions[3] = function () { console.log("Bon Jour!"); };
    
    // Keeps track of how many numbers have been entered
    var counter = 0
    
    // User input setup and functionality 
    var readline = require('readline');
    var rl = readline.createInterface({
            input:process.stdin,
            output:process.stdin,
            terminal:false
    });
    
    rl.setPrompt('Enter a number: ')
    
    rl.on('line', function (line) {
        functions[line]();
        counter++;
        if(counter < 5)
        {
            rl.prompt();
        }
        else { rl.close(); }
    })
    
    rl.on('close', function () {
        console.log("Bye");
    })
    
    rl.prompt();
}