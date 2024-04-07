
//  Metodo que sale solo por consola
// console.log('Hola mundo')

// Metodo que es un elemento de alerta, en el que devuelve "return" lo que tu has mandado como elemento de alerta
// alert('Hola mundo')

// Es una constante, no va a cambiar su valor, se inicializa con const + Nombre + valor
const IVA = 0.21

// Variable, se declara con let + nombre + el valor "mensaje/String" que quieras guardar. LET + NOMBRE + VALOR
//  let response = prompt('Que tal estas?')

// Metodo, que sale como alerta y puedes introducir algun valor.
// console.log(response)

// Para capturar un elemento de HMTL con su id utilizamos el siguiente metodo al que le pasamos como parametro
// el id del elemento que queremos capturar y nos devolvera dicho elemento que guardaremos en una constante, porque no se va a cambiar

// Manera de hacerlo mediante ID
// const header = document.getElementById('header')
// console.log('este es el tamaño de la letra antes de cambiarlo')
// console.log(header.style.fontSize)
// console.log(header.style)
// header.style.backgroundColor = 'red'
// header.style.fontSize = '4rem'
// console.log('este es el tamaño de la letra despues de cambiarlo')
// console.log(header.style.fontSize)


// Captura de un evento
const header = document.getElementById('header')
const button = document.getElementById('button')
console.log(button)


// addEventListener --> añadir un escuchador , le paso como parametro el evento que quiero capturar y como segundo, 
// la funcion que quiero que capture
const cambiarColorHeader = (event) => {
    header.style.color = 'red'
    header.style.fontSize = '6rem'

}
button.addEventListener('click', cambiarColorHeader)

// Hacer otro boton
// Header color negro y font size de 1 rem
//Cuando pulse el boton ponerse negro el color de la fuente y a 1 rem
const button_default = document.getElementById('button_default')
console.log(button_default)

const colorFuente = (event) =>{
    header.style.color = 'black'
    header.style.fontSize = '4rem'
} 

button_default.addEventListener('click' , colorFuente)
