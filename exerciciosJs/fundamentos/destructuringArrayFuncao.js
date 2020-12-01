function rand({min = 0, mas = 1000}){
    if (min > max) [min, max] = [max, min] // invertendo os valores de min e max em um novo array, pois foram recebidos como parametros

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([])) // executa por causa do valores já setados
console.log(rand()) // da erro por ser undefined ou null