const container = document.querySelector('#container')
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"



for (let index = 1; index <= 151; index++) {
    const pokemon = document.createElement('div')
    pokemon.classList.add('pokemon')
    const label = document.createElement('span')
    label.innerText = `No. ${index}`
    label.style.color = "blue"
    
    const newImg = document.createElement('img')
    newImg.src = `${url}${index}.png`
    newImg.style.border = "2px solid black"
    
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)
    container.appendChild(pokemon)

}