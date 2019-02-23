//console.log(process.argv)

var sum = 0;

for (var i = 2; i < process.argv.length; i++) {

    sum += Number(process.argv[i]);
}

console.log(`Sum ${sum}, Directory: ${process.argv[1]}

Begin
    bepajaspaj
END

`)