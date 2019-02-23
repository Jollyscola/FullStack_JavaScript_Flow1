var fs = require('fs');

var filtpath = process.argv[2];
fs.readFile(filtpath,function callback(err, data) {
    if(err){
        return console.log(err)
    }

    var count = data.toString().split('\n');

    console.log(count.length - 1);
});


