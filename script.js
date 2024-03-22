
const contenedor = document.querySelector("#personajes")
fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then((mundo) => {
    for (let i = 0; i < mundo.length; i++) {
        
        const col = document.createElement('div')
        col.classList.add('col-sm-3')

        col.innerHTML +=`
        <div class="card">
            <img src="${mundo[i].image}" class="card-img-top" alt="${mundo[i].name}">
            <div class="card-body">
                <h5 class="card-title">${mundo[i].name}</h5>
                <p class="card-text">${mundo[i].gender}</p>
                <p class="card-text">${munod[i].species}</p>
                <a href="#" class="btn btn-primary">${mundo[i].status}</a>
            </div>
        </div>`

        contenedor.append(col)
        
    }
})
