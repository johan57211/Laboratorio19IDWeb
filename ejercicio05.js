async function AlturaPesoPikachu () {
    try{
        let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

        let datos = await respuesta.json();
        console.log("PIKACHU"+"\nPeso: "+datos.weight+"\nAltura: "+datos.height)
    } catch(e){
        console.error("Ocurrio un error: "+e)
    }
}

AlturaPesoPikachu();