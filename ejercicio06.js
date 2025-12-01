fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log("URL del sprite:", datos.sprites.front_default);
    })
    .catch(error => {
        console.log("Error:", error);
    });
