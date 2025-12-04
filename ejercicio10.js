async function cargarPokemons() {
    let lista = [];

    for (let i = 1; i <= 10; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        lista.push(data);
    }

    lista.forEach(poke => {
        document.getElementById("contenedor").innerHTML += `
            <div class="card">
                <h3>${poke.name}</h3>
                <img src="${poke.sprites.front_default}">
                <p>ID: ${poke.id}</p>
            </div>
        `;
    });
}

cargarPokemons();