// Capturando os elementos necessários
const pokemonName = document.querySelector('.name')
const pokemonNumber = document.querySelector('.number')
const pokemonGif = document.querySelector('.pokemonGif')
const searchInput = document.querySelector('#search')
const btnSearch = document.querySelector('#btnSearch')
const btnRandom = document.querySelector('#btnRandom')
// Elementos de audio
const audioError = document.querySelector('#error')
const audioClick = document.querySelector('#click')

// Requisitando o pokemon na API
const fetchPokemon = async (pokemon) => {
    const APIResponde = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    if (APIResponde.status !== 200) {
        errorMessage()
    } else {
        searchInput.value = ""
        const data = await APIResponde.json()
        return data
    }
}

// Renderizando o pokemon no site
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName.innerText = data.name
    pokemonNumber.innerText = `#${data.id}`
    pokemonGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
}

// Botão de pesquisar pokémon
btnSearch.addEventListener('click', () => {
    audioClick.play()
    if (searchInput.value === "") {
        errorMessage()
    } else {
        renderPokemon((searchInput.value).toLowerCase())
    }
})

searchInput.addEventListener('keypress', (ev) => {
    if (ev.code === "Enter") {
        const pokemon = ev.currentTarget.value
        renderPokemon(pokemon.toLowerCase())
    }
})

// Botão de mostrar um pokémon aleatório
btnRandom.addEventListener('click', () => {
    audioClick.play()
    searchInput.value = ""
    const number = Math.floor(Math.random() * 649)

    renderPokemon(number)
})

// Função da mensagem de pokémon não encontrado
const errorMessage = () => {
    audioError.play()
    pokemonName.innerText = 'Quem é este pokémon?'
    pokemonNumber.innerText = '#???'
    pokemonGif.src = 'images/error.gif'
}

