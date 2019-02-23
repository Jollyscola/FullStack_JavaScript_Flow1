const fetch = require("node-fetch");

/* async function serial(count) {
  const swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe the await 
      await fetch("https://api.icndb.com/jokes/random")
        .then(res => { return res.json() }));
  }
  console.log(swappiPeople.map(p=>p.value.joke).join("\n "));
} */
async function parallel(count) {
  const swappiPeople = [];
  for (let i = 1; i < count; i++) {
    swappiPeople.push(
      //Observe no await
      fetch("https://api.icndb.com/jokes/random")
        .then(res => { return res.json() }));
  }
  const allEntries = await Promise.all(swappiPeople);
  console.log(allEntries.map(p=>p.value.joke).join("\n"));  
  
}
//Time each of the two strategies
//serial(2);
parallel(15);