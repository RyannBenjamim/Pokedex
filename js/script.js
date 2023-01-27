// Capturando os elementos necessários
const pokemonName = document.querySelector('.name')
const pokemonNumber = document.querySelector('.number')
const pokemonGif = document.querySelector('.pokemonGif')
// Elementos do modal
const infoName = document.querySelector('.infoName')
const infoTipo = document.querySelector('.infoTipo')
const altura = document.querySelector('.altura')
const peso = document.querySelector('.peso')
const speed = document.querySelector('.speed')
const spe_def = document.querySelector('.spe_def')
const spe_atk = document.querySelector('.spe_atk')
const attack = document.querySelector('.attack')
const defense = document.querySelector('.defense')
const hp = document.querySelector('.hp')
const modalImg = document.querySelector('.infos img')
// Input e btns
const searchInput = document.querySelector('#search')
const btnSearch = document.querySelector('#btnSearch')
const btnRandom = document.querySelector('#btnRandom')
const btnMore = document.querySelector('.more')
// Elementos de audio
const audioError = document.querySelector('#error')
const audioClick = document.querySelector('#click')

// Requisitando o pokemon na API
const fetchPokemon = async (pokemon) => {
    const APIResponde = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    if (APIResponde.status !== 200) {
        errorMessage()
    } else {
        btnMore.classList.remove('block')
        searchInput.value = ""
        const data = await APIResponde.json()
        console.log(data)
        return data
    }
}

// Renderizando o pokemon no site
const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName.innerText = data.name // Nome
    infoName.innerText = data.name // Nome no modal
    pokemonNumber.innerText = `#${data.id}` // Id

    altura.innerText = `${data.height / 10}m` // Altura
    peso.innerText = `${data.weight / 10}kg` // Peso

    speed.innerText = `Speed - ${data.stats[5].base_stat}`
    spe_def.innerText = `Special Defence - ${data.stats[4].base_stat}`
    spe_atk.innerText = `Special Attack - ${data.stats[3].base_stat}`
    attack.innerText = `Attack - ${data.stats[1].base_stat}`
    defense.innerText = `Defense - ${data.stats[2].base_stat}`
    hp.innerText = `Hp - ${data.stats[0].base_stat}`
    
    if (data.types.length === 1) {
        infoTipo.innerText = data.name.innerText = `${data.types[0].type.name}`
    } else {
        infoTipo.innerText = `${data.types[0].type.name} / ${data.types[1].type.name}`
    }

    if (data.id <= 649) {
        pokemonGif.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        modalImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    } else {
        pokemonGif.src = data['sprites']['front_default']
        modalImg.src = data['sprites']['front_default']
    }
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
    const number = Math.floor(Math.random() * 905)

    renderPokemon(number)
})

// Função da mensagem de pokémon não encontrado
const errorMessage = () => {
    audioError.play()
    pokemonName.innerText = 'Quem é este pokémon?'
    pokemonNumber.innerText = '#???'
    pokemonGif.src = 'images/error.gif'
}

