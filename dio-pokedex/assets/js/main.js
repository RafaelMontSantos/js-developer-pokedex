import { createPokemonHTMLElements } from "./pokemon-html.js"

document.addEventListener("DOMContentLoaded", async () => {
    await createPokemonPage("default")
    previousBtn.disabled = true
})

const nextBtn = document.querySelector(".next")
nextBtn.addEventListener("click", async ()=>{
    
    document.querySelector(".pokemon-list").replaceChildren()
    await createPokemonPage("next")

    nextBtn.disabled = url.next === null? true : false
    previousBtn.disabled = url.previous === null? true : false
})

const previousBtn = document.querySelector(".previous")
previousBtn.addEventListener("click", async ()=>{
    
    document.querySelector(".pokemon-list").replaceChildren()
    await createPokemonPage("previous")

    previousBtn.disabled = url.previous === null? true : false
    nextBtn.disabled = url.next === null? true : false

})

async function createPokemonPage(request) {
    const result = await pokeApi.getPokemons(request)
    const pokemonDetails = result.map((pokemon) =>{
        return {
            name: pokemon.name,
            number: pokemon.id,
            type1: pokemon.types[0].type.name,
            type2: pokemon.types.length === 2 ? pokemon.types[1].type.name: null,
            abilities: pokemon.abilities,
            imgSrc: pokemon.sprites.other["official-artwork"].front_default
        }
    })

    pokemonDetails.map((pokemonDetail)=>{
        const pokemonHtml = createPokemonHTMLElements(
            pokemonDetail.name,
            pokemonDetail.number,
            pokemonDetail.type1,
            pokemonDetail.type2,
            pokemonDetail.abilities,
            pokemonDetail.imgSrc
        )
        const pokemonListHTML = document.querySelector(".pokemon-list")
        pokemonListHTML.appendChild(pokemonHtml)
    })
}

