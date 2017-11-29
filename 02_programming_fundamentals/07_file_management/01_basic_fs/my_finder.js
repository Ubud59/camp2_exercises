const fs = require("fs");
const path = require("path");

function my_finder() {
let p = "./";
let cpt = 0;
fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }
    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        // return fs.statSync(file).isFile();
        return isAFile(path.join(p,file));
    }).forEach(function (file) {
        console.log(cpt + ". " + file);
        cpt ++;
    });
});
}

function give_me_the_path(file) {
  return path.join(p, file);
}

function isAFile(path) {
  const stats = fs.lstatSync(path);
  return stats.isFile();
}

my_finder();
