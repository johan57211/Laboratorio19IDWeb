async function obtenerPokemonID(){
    let id = prompt("Ingrese el ID de un Pokemon: ");

    try{
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);

        if(!respuesta.ok){
            console.log("Pokemon no encontrado");
            return
        }

        let datos = await respuesta.json();
        console.log("Nombre del Pokemon: "+datos.name);
    } catch (e){
        console.error("Hubo un error: "+error)
    }
}

obtenerPokemonID();