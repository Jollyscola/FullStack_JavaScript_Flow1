const filterDire = require('./makeitmodular06')

const diretory2 = process.argv[2];
const ext = process.argv[3];

filterDire(diretory2,ext, (err,data) => {
    if(err){
    throw new Error("Uppps:" + err)
    }

    data.forEach(element => {
        console.log(element)
    });
})