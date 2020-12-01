const array = [6.8, 8.8, 8.9, 5.6, 8.5, 9.4, 5.8];

for(let i in array) {
    console.log(i, array[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for ( let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)
}
