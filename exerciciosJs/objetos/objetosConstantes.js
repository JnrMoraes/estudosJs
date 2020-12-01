// pessoa aponta para end de memória -> 123 para um objeto -> {....}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log

// pessoa -> 456 -> {....}
//pessoa = { nome: 'Ana'} //não rola atribuir noevamente para outro end de memoria


Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = ' Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: ' José'})
console.log(pessoaConstante)