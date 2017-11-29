const fs = require('fs');

// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.

function deleteFile(fileLocation) {
  if (fileLocation.startsWith("./")) {
    fs.unlink(
      fileLocation,
      (error) => {
        if (error) {
          console.warn(`unable to delete ${fileLocation} because : ${error}`, null);
        } else {
          console.warn(null, `${fileLocation} deleted.`);
        }
      }
    );
  } else {
  console.warn("File don't exist.");
  }
}

deleteFile('./test.txt');

module.exports = deleteFile
