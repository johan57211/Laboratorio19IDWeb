async function pokemonAleatorio() {
    let numero = Math.floor(Math.random() * 898) + 1;

    console.log("Número generado:", numero);

    try {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/"+numero);
        let datos = await res.json();

        console.log("Pokémon aleatorio:");
        console.log("Nombre:", datos.name);
        console.log("ID:", datos.id);
        console.log("Altura:", datos.height);
        console.log("Peso:", datos.weight);
    } catch (e) {
        console.log("Error:", e);
    }
}

pokemonAleatorio();