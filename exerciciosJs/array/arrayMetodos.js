const pilotos = ['Vettle', 'Alonso', 'Raikkonen', 'Massa'] 
pilotos.pop() // remove ultimo
console.log(pilotos, pilotos.length)

pilotos.push('Verstappen') //add por ultimo
console.log(pilotos, pilotos.length)

pilotos.shift() // remove o primeiro
console.log(pilotos, pilotos.length)

pilotos.unshift('Hamilton') // add antes do primeiro
console.log(pilotos, pilotos.length)

//splice, adiciona e remove elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos, pilotos.length)

// remover
pilotos.splice(3, 1)
console.log(pilotos, pilotos.length) // removeu Massa

// slice - retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // inclui os elementos do indice 1 ate p 4, mas não o ultimo
console.log(algunsPilotos2)