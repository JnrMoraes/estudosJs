let valor 
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString()) //Erro 

const produto = {}
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco =  undefined //evitar atribuir undefined
delete produto.preco //tira o atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) //false
console.log(produto)

