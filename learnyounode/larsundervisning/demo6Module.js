var fs = require('fs');
var path = require('path');


function fileprint(dirname, ext, callback) {
    fs.readdir(dirname, (err, data) => {
        if (err) {
            return callback(err)
        }
        const res = data.filter(fil => path.extname(fil) === '.'+ext)
        return callback(null, res);
    }

    );

}
module.exports = fileprint