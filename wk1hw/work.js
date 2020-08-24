var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Are you a goofy goober Yeah ', (answer) => {
    console.log(`We're all goofy goobers ${answer}`);

    rl.question('whats your name? ', (answer) => {
        console.log(`hi ${answer}`);
        rl.close
});
});
