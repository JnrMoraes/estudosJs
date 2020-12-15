// operador ... rest(juntar)/ spread(espalhar)

//usar spread com o objeto

const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)


// usar spread com array
const grupaA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Marina', ...grupaA, 'Rafaela']
console.log(grupoFinal)