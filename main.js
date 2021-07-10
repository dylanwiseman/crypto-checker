// const { default: axios } = require("axios")

const cryptoBtn = document.querySelector("button")
const tickerForm = document.querySelector("input")
const baseURL = 'https://api.cryptonator.com/api/ticker/'

// let tickerForm = document.getElementById("crypto")

const submitTicker = (event) => {
    event.preventDefault()
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let div = document.createElement('div')
    let ticker = document.getElementById("crypto").value
    axios.get(`${baseURL}${ticker}-usd`).then((res) => {
        let { base,change,price,target } = res.data.ticker
        let price2 = +price
        let price3 = price2.toFixed(2)
        let change2 = +change
        let change3 = (change2/price2*100).toFixed(2)
        h2.textContent = `${base} ${price3} ${target}`
        if (change >= 0) {
            h3.textContent = `+${change3}%`
            h3.classList.add('green')
            div.classList.add('green')
            h2.classList.add('green')
        } else {
            h3.textContent = `${change3}%`
            h3.classList.add('red')
            div.classList.add('red')
            h2.classList.add('red')
        }
        document.body.appendChild(div).appendChild(h2)
        div.appendChild(h3)
    })
    // document.querySelector("input").value = ""
    // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=251`).then((res) => {
    //     randomIndex = Math.floor(Math.random()*res.data.results.length)
    //     console.log(randomIndex)
    //     randomPokemon = res.data.results[randomIndex].name
    //     console.log(randomPokemon)
    //     let pokemonLink = document.createElement('a')
    //     let pokemonImg = document.createElement('img')
    //     pokemonLink.href = `href=http://pokemondb.net/pokedex/${randomPokemon}`
    //     pokemonImg.src = `https://img.pokemondb.net/sprites/black-white/anim/normal/${randomPokemon}.gif`
    //     div.appendChild(pokemonLink)
    //     pokemonLink.appendChild(pokemonImg)
    // })
}

cryptoBtn.addEventListener('click',submitTicker)
tickerForm.addEventListener('submit',submitTicker)