"use stric"

const URL = "https://rickandmortyapi.com/api/"
const main = document.querySelector( "main" )

document.addEventListener( "DOMContentLoaded", () => consumirAPI()  )

async function consumirAPI() {
    
    let data = await fetch( `${URL}character` )
                .then( response => response.json() )
                .then( data => data )
                .catch( error => console.error("UPS! ALGO SALIO MUY MAL", error) )

    mostrarPersonajes( data )

}

function mostrarPersonajes( personajesData ) {
    console.log( personajesData )

    let fragmento = ""

    personajesData.results.map( (personaje, index) => {

        

        const { name, image, species, location, gender, status } = personaje

        

        fragmento +=   `
                        <article class="character-card">
                            <div class="avatar-neon">
                                <img src="${ image }" alt="">
                            </div>
                            <h5>${ name }</h5>
                            <p><span>Status: </span>${ status }</p>
                            <p><span>especie: </span>${ species }</p>
                            <p><span>Genero: </span>${ gender }</p>
                            <p><span>ubicación: </span>${ location.name }</p>
                        </article>
                    `
    })

    main.innerHTML = fragmento
}


