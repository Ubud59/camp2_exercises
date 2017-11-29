const path = require("path");
const fs = require('fs');

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"

function pwd() {
  fs.realpath(
    ".",
    (error, resolvedPath) => {
      if (error) {
        console.war(error);
      } else {
        console.log(resolvedPath);
      }
    }
  )
}

pwd();

module.exports = pwd
