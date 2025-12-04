async function buscarPokemon() {
    const nombre = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    if (!nombre) {
        resultado.innerHTML = "<p>Ingresa un Pokémon</p>";
        return;
    }

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

        if (!res.ok) throw new Error("Pokémon no encontrado");

        const data = await res.json();

        let lista = "";
        data.stats.forEach(s => {
            lista += `<li>${s.stat.name}: ${s.base_stat}</li>`;
        });

        resultado.innerHTML = `
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}">
            <ul>${lista}</ul>
        `;

    } catch (error) {
        resultado.innerHTML = "<p>Pokémon no encontrado</p>";
    }
}
