// function primeiroElemento(array) {
//     return array[0]
// }
const primeiroElemento = array => array[0]

// function primeiraLetra(string) {
//     return string[0]
// }
const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise((resolve) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    // .then(letra => console.log(letra))
    .then(console.log) //pega o proprio valor do then aterior como referencia passando como paramentro

