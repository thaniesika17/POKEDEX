const listaPokemon = document.querySelector('#todos')
const personajes = []

const botonesMenu = document.querySelectorAll('.btn-sm')

let url = "https://pokeapi.co/api/v2/pokemon/"
for (let i = 0; i < 151; i++) {
    fetch(url+i)
    .then((promesa) => promesa.json())
    .then((data) => {
        mostrarPokemon(data)

     
})
   
}

function mostrarPokemon(poke){

    let tipos = poke.types.map(type => type.type.name)
    personajes.push(poke)


    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML = `
    <div class="col-sm-4">
            <div class="card">
                <img src="${poke.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="${poke.name}" >
                <div class="card-body">
                    <h5 class="card-title">#${poke.id}</h5>
                    <h5 class="card-title">${poke.name}</h5>
                    <p class="card-text">Tipo: ${tipos}</p>
                    <button class="btn btn-outline-success" onclick="alert('El peso de ${poke.name} es: ${poke.weight} kg y su altura es: ${poke.height} cm')">Más información</button>
                </div>
            </div>
        </div>`
    listaPokemon.append(div)
}

function dibujaPokemon(personajes){

    const div = document.createElement("div")
    div.classList.add("pokemon")
    div.innerHTML = `
    <div class="col-sm-4">
            <div class="card">
                <img src="${personajes.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="${personajes.name}" >
                <div class="card-body">
                    <h5 class="card-title">#${personajes.id}</h5>
                    <h5 class="card-title">${personajes.name}</h5>
                    <p class="card-text">Tipo: ${tipos}</p>
                    <button class="btn btn-outline-success" onclick="alert('El peso de ${personajes.name} es: ${personajes.weight} kg y su altura es: ${personajes.height} cm')">Más información</button>
                </div>
            </div>
        </div>`
    listaPokemon.append(div)

}

function buscar(evt){
    evt.preventDefault()

    const termino = document.getElementById("inputBusqueda").value.toLowerCase()
    
    const find = personajes.filter((personaje) =>{
        return personaje.name.toLowerCase().includes("termino")

    })
    dibujaPokemon(find)
}

const formulario = document.getElementById("busqueda")
formulario.addEventListener("submit", buscar)

botonesMenu.forEach(boton =>  boton.addEventListener("click", (event) => {
        const btnid = event.currentTarget.id

        listaPokemon.innerHTML = ""

        for (let i = 0; i < 151; i++) {
            fetch(url+i)
            .then((promesa) => promesa.json())
            .then((poke) => { 
                const tipos = poke.types.map(type => type.type.name)
                if(tipos.some(tipo => tipo.includes(btnid))){
                    mostrarPokemon(poke)
                }
        })
           
        }
}));
