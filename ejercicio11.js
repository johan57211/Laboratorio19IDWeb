async function buscar() {
    const valor = document.getElementById("entrada").value.toLowerCase();
    if (!valor) return;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
    const data = await res.json();

    const tipos = data.types.map(t => t.type.name).join(", ");

    document.getElementById("info").innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
        <p><b>Tipos:</b> ${tipos}</p>
    `;
}