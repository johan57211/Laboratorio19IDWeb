async function mostrarStats(pokemon) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const data = await res.json();

        console.log("Estadísticas base de", data.name);
        data.stats.forEach(s => {
            console.log(s.stat.name + ": " + s.base_stat);
        });

    } catch (error) {
        console.log("Error:", error);
    }
}

mostrarStats("charizard");
