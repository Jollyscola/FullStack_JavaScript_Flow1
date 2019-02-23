
const myPromise = require("./promiseexercises");


const p1 = myPromise(48);
const p2 = myPromise(40);
const p3 = myPromise(32);
const p4 = myPromise(24);
const p5 = myPromise(16);
const p6 = myPromise(8);



let promises = [p1, p2, p3, p4, p5, p6];



Promise.all(promises).then(res => console.log(res))
.catch(err => console.log("uups: ", err))
.finally(console.log("done"))











