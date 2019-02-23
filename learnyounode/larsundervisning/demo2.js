 const fs = require('fs');
 //const x = require("./idontexist");
 const fileName = process.argv[2];
/* const content = fs.readFileSync(fileName)

console.log(content.toString()) */
const contents = fs.readFile(fileName, (err ,data) => {
if(err){
throw new Error("Upps" + err);
}

const newdata = data.toString();
console.log(newdata);

}) 