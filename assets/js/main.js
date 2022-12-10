const pokemonList = document.getElementById('pokemonList')
const loadButton = document.getElementById('loadButton')
const maxRecord = 151
const limit = 10
let offset = 0




function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => ` 
                <li class="Pokemon ${pokemon.type}">
                        <span class="number">Nº 00${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
        
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>  
                </li>        
            `
        ).join('') 
    })
}

loadPokemonItens(offset, limit)

loadButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNewPage = offset + limit

    if (qtdRecordNewPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadButton.parentElement.removeChild(loadButton)

     } else {
        loadPokemonItens(offset, limit)
     }
})