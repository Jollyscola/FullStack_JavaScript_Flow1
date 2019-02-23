

var result = 0;

for (var i = 0; i < process.argv.length; i++) {

    if (process.argv[i] >= '0' && process.argv[i] <= '9') {
        result += Number(process.argv[i]);
    }
}

console.log(result);