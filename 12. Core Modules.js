// core module : file system 
var fs = require('fs');     

fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn.txt").toString());

// core module : file path 
var path = require('path');
var websiteHome = "/Users/hyodaekim/WebstormProjects/Node.js-Basic/index.html";
var websiteAbout = "/Users/hyodaekim/WebstormProjects/Node.js-Basic/about.html";
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

console.log(__dirname);
console.log(__filename);

// setInterval will call the function at every 2000 ms
setInterval(function () {
    console.log("beef");
}, 2000);