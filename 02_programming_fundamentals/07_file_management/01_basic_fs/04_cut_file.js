// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)


const fs = require("fs");

function cutPaste(sourceFilename, targetFilename) {

  fs.readFile(sourceFilename, (error, data) => {
    if (error) {
      console.warn(error);
    } else {
      fs.writeFile(
        targetFilename,
        data,
        (error) => {
          if (error) {
            console.warn(`impossible to Copy/Paste because : ${error}`);
          } else {
            console.log(`Copy/Paste ${targetFilename} succeded`);
            fs.unlink(
              sourceFilename,
              (error) => {
                if (error) {
                  console.warn(`unable to delete ${sourceFilename} because : ${error}`, null);
                } else {
                  console.warn(null, `${sourceFilename} deleted.`);
                }
              }
            );
          }
        }
      );
    }
  });
}

cutPaste('./test.txt', './test3.txt');


module.exports = cutPaste;
