let pokemons = [];
let indice = 0;

async function cargarPokemones() {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemons.push({
            id: data.id,
            name: data.name,
            img: data.sprites.front_default
        });
    }
    mostrar();
}

function mostrar() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    const grupo = pokemons.slice(indice, indice + 3);

    grupo.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${p.img}">
                <h3>${p.name}</h3>
                <p>ID: ${p.id}</p>
            </div>
        `;
    });
}

document.getElementById("btnSiguiente").addEventListener("click", () => {
    if (indice + 3 < pokemons.length) {
        indice += 3;
        mostrar();
    }
});

document.getElementById("btnAnterior").addEventListener("click", () => {
    if (indice - 3 >= 0) {
        indice -= 3;
        mostrar();
    }
});

cargarPokemones();
