// Variables

let div = document.querySelector('#container')
let paragraph = document.createElement('p')
let tittle = document.createElement('h3')
let container = document.createElement('div')
let h1 = document.createElement('h1')
let p = document.createElement('p')

// Adding CSS

// p in the DIV

p.textContent = 'ME TOO!'

// h1

h1.textContent = `I'm in a DIV!`

// div

container.style.border = '1px solid black'
container.style.backgroundColor = 'pink'

// h3

tittle.style.color = 'blue'
tittle.textContent = `I'm a blue h3!`

// p
paragraph.style.color = 'red'
paragraph.textContent = `Hey, I'm red!`

// Adding the element to the HTML

div.appendChild(paragraph)
div.appendChild(tittle)
div.appendChild(container)
container.appendChild(h1)
container.appendChild(p)