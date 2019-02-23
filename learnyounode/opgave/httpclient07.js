var http = require('http');

var url = process.argv[2];

http.get(url, (response) => {
response.setEncoding('utf8');
    response.on('data', (data) => {
        console.log(data.toString());
    })
    response.on('error', (err) =>{
        throw new Error("uups: " + err)

    })
})