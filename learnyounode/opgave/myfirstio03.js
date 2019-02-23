var fs = require('fs');


var filtpath = process.argv[2];

var readfile = fs.readFileSync(filtpath);
var count = readfile.toString().split('\n');

console.log(count.length - 1)