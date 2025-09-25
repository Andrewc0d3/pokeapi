async function Pokemon (){

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+id);
    const data= await res.json();
    
    console.log(data)
    var root =  document.getElementById("root");

    let tipoPoke = "";
   for(let i = 0; i <data.types.length; i++) {
        tipoPoke += '<span>${data.types[i].type.name}</span>';
    }

    root.innerHTML= ^div class^
}

Pokemon(5)
Pokemon(254)