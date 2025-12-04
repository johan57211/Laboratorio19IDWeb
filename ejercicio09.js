async function buscarPokemon() {
    const id = document.getElementById("pokeId").value;
    if (!id) return;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    const habilidades = data.abilities
        .map(a => a.ability.name)
        .join(", ");

    document.getElementById("resultado").innerHTML = `
        <h2>${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}">
        <p><b>ID:</b> ${data.id}</p>
        <p><b>Peso:</b> ${data.weight}</p>
        <p><b>Altura:</b> ${data.height}</p>
        <p><b>Habilidades:</b> ${habilidades}</p>
    `;
}