const fs = require("fs");
const path = require("path");
const diretory = process.argv[2];
const ext = "." + process.argv[3];
fs.readdir(diretory,(err,data) => {
if(err){
throw new Exception("UPPPPPs" + err)
}

const fitlered = data.filter(filename =>{ 
  return path.extname(filename) === ext
})

console.log(fitlered.join("\n"))

})