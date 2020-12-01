// Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer coisa', preco: 1.99, tag: 'promoção'
})

console.log('É extensivel?', Object.isExtensible(produto)) // false


produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não irá ser add por causa do preventExtensions
delete produto.tag // irá deletar, pois preventExtensions aceita 
console.log(produto)

// Object.seal -- sela os atributos, nõa deleta, não exclui, mas permite modificação do valores dos atributos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Esta selado?', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // não add por causa do seal
delete pessoa.nome // não deletou por causa do seal
pessoa.idade = 29 // alterou 
console.log(pessoa)

// Object.freeze = selado + mais calores constantes == writeble = false
