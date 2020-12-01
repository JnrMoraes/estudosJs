function rand({min = 0, mas = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max:50, min:40 }
console.log(rand(obj))
console.log(rand({ min:955 }))
console.log(rand({})) // executa por causa do valores já setados
console.log(rand()) // não executa por não receber nada