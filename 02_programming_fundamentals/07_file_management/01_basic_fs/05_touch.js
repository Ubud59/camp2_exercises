// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.

const fs = require("fs");

function touch(fileName) {
  fs.writeFile(
    fileName,
    "",
    (error) => {
      if(error) {
        console.warn(error);
      } else {
        console.log(`${fileName} created!`)
      }
    }
  )
}

touch('test4.txt');

// créé systématiquement un fichier !!!

module.exports = touch;
