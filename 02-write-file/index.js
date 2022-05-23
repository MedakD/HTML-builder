const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

+function askPrompt(query) {
    return new Promise(resolve => rl.question(query, ans => {
        resolve(ans);
    }))
    }
    
    const writeCustomContent = async function() {
    const content = await askPrompt("Please enter content:");
    
    fs.writeFile('./02-write-file/file.txt', content, err => {
        if (err) {
        console.error(err);
        }
    });
    };
    
    rl.on('line', (input) => {
    if (input === 'exit') {
        rl.close()
    }
    fs.appendFile('./02-write-file/file.txt', `\n${input}`, err => {
        if (err) {
        console.error(err);
        }
    });
});

rl.on('close', function () {
    console.log('\nFile created! Have a nice day :)!');
  process.exit(0);
});

writeCustomContent();
