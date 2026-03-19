export function createPokemonHTMLElements (pokemonName, pokemonNumber, pokemonType1, pokemonType2, pokemonAbilities, imgSrc){
    const pokemonLI = document.createElement("li")
    pokemonLI.classList.add("pokemon")
    pokemonLI.classList.add(`${pokemonType1}Pokemon`)

    const number = document.createElement("span")
    number.classList.add("number")
    number.textContent = `#${pokemonNumber < 10 ? 
        "00" + pokemonNumber: pokemonNumber < 100?
        "0" + pokemonNumber: pokemonNumber}`

    const name = document.createElement("span")
    name.classList.add("pokemon-name")
    name.textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)

    const detail = document.createElement("div")
    detail.classList.add("detail")

    const info = document.createElement("div")
    info.classList.add("info")

    const types = document.createElement("ol")
    types.classList.add("types")

    const type1 = document.createElement("span")
    type1.classList.add(pokemonType1)
    type1.classList.add("type")
    type1.textContent = pokemonType1

    const type2 = document.createElement("span")
    pokemonType2 !== null? type2.classList.add(pokemonType2) : null
    pokemonType2 !== null? type2.classList.add("type") : null
    type2.textContent = pokemonType2 === null? "": pokemonType2

    const abilities = document.createElement("ol")
    abilities.classList.add("abilities")

    const skill_1 = document.createElement("span")
    skill_1.textContent = pokemonAbilities[0].ability.name
    skill_1.classList.add(pokemonType1)
    skill_1.classList.add("skill")

    const skill_2 = document.createElement("span")
    pokemonAbilities.length === 2 ? skill_2.textContent = pokemonAbilities[1].ability.name : null
    pokemonAbilities.length === 2 ? skill_2.classList.add(pokemonType1): null
    skill_2.classList.add("skill")

    const pokemonImg = document.createElement("img")
    pokemonImg.classList.add("pokemon-img")
    pokemonImg.src = imgSrc
    pokemonImg.alt = pokemonName

    abilities.appendChild(skill_1)
    skill_2.textContent !== "" ? abilities.appendChild(skill_2) : null

    types.appendChild(type1)
    type2.textContent !== ""? types.appendChild(type2): null
    
    info.appendChild(types)
    info.appendChild(abilities)
    detail.appendChild(info)
    detail.appendChild(pokemonImg)

    pokemonLI.appendChild(number)
    pokemonLI.appendChild(name)
    pokemonLI.appendChild(detail)

    pokemonLI.addEventListener("mouseover", ()=>{
        types.style.display = "none"
        abilities.style.display = "flex"
    })

    pokemonLI.addEventListener("mouseout", ()=>{
        types.style.display = "flex"
        abilities.style.display = "none"
    })
    return(pokemonLI)
}