fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(res => res.json())
    .then(data => {
        data.results.forEach((pokemon, index) => {
            console.log((index + 1) + ". " + pokemon.name);
        });
    })
    .catch(error => console.log("Error:", error));
