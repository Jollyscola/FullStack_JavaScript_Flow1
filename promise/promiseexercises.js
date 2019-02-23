
const mypromise = function myPromise(length) {
    return new Promise((resolve, reject) => {
      require('crypto').randomBytes(length, function (err, buffer) {
        if (err) {
          return reject(new Error("UPPPs"));
        } else {
          let random = buffer.toString('hex');
          return resolve({length, random});
        }
  
      }
      );
    })
  }


module.exports = mypromise;