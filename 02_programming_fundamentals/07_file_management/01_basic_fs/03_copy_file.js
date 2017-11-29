const fs = require("fs");

function copyPaste(copyedFilename, pastedFilename) {

  fs.readFile(copyedFilename, (error, data) => {
    if (error) {
      console.warn(error);
    } else {
      fs.writeFile(
        pastedFilename,
        data,
        (error) => {
          if (error) {
            console.warn(`impossible to Copy/Paste because : ${error}`);
          } else {
            console.log(`Copy/Paste ${copyedFilename} succeded`);
          }
        }
      );
    }
  });
}

copyPaste('./test.txt', './test2.txt');


module.exports = copyPaste;
