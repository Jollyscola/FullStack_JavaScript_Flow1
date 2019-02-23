const fetch = require("node-fetch");



async function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {

    var p1 = await fetch("https://swapi.co/api/people/" + id)
        .then(res => res.json());

    var p2 = await fetch(p1.films[0])
        .then(res => res.json());

    var p3 = await fetch(p2.species[0])
        .then(res => res.json());

    var p4 = await fetch(p3.homeworld)
        .then(res => res.json());



    Promise.all([p1, p2, p3, p4])
        .then(console.log("Name: " + p1.name))
        .then(console.log("Film: " + p1.title))
        .then(console.log("Species: " + p1.name))
        .then(console.log("Homeworld: " + p1.homeworld))
        .catch(handleHttpErrors)

    function handleHttpErrors(res) {
        if (!res.ok) {
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
        return res.json();
    }

}


getPlanetforFirstSpeciesInFirstMovieForPerson(1)

