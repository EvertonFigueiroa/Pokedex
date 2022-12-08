
function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertPokemonToHtml(pokemon) {
    return ` 
        <li class="Pokemon ${pokemon.type}">
                <span class="number">Nº 00${pokemon.number}</span>
                <span class="name">${primeiraLetraMaiuscula(pokemon.name)}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>  
        </li>        
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')

})