const pokeApi = {}
const url = {}
url.default = `https://pokeapi.co/api/v2/pokemon`

pokeApi.getPokemons = async (pageRequest) =>{
    const response = await fetch(pageRequest === "previous" ? url.previous
                                :pageRequest === "next" ? url.next : url.default + `?offset=0&limit=20`
    )
    if (!response.ok){
        throw new Error ("Could not fetch data")
    }
    const result = await response.json()
    url.next = result.next
    url.previous = result.previous
    const dataList = result.results
    const pokemonPromiseList = dataList.map(pokemon => {
        const pokemonPromise = pokeApi.getPokemonDetail(pokemon.url)
        return pokemonPromise
    })
    return await Promise.all(pokemonPromiseList)
}

pokeApi.getPokemonDetail = async (pokemonUrl) => {
    const response = await fetch(pokemonUrl)
    if (!response.ok){
        throw new Error ("Could not fetch data")
    }
    return await response.json()
}

