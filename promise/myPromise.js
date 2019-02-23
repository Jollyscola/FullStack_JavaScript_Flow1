const mypromise = function myPromise(msg,delay){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let error = false; // Math.random() * 10 < 2;
        if(error){
          return reject(new Error("UPPPs"));
        }
        return resolve(msg.toUpperCase());
      },delay);
    })
  }

  module.exports = mypromise;

