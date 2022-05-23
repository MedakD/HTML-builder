const fs = require("fs");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('enter content ? ', function (content) {
    fs.writeFileSync('./02-write-file/file.txt', content, err => {
        if (err) {
          console.error(err);
        }
        // done!
      });
    rl.close();
});

rl.on('close', function () {
  console.log('\nAtata !!!');
  process.exit(0);
});
