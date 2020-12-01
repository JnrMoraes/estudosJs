// Coleção dinamica de pares chaves/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            logradouro:'Rua ABC',
            numero: 123
        }
    },
    consutores:[{
        nome: 'Raul',
        idade: 19
    },
    {
        nome: 'Monica',
        idade: 23
    }],
    calcularValorSeguro: function () {
        // .. regra da função
        
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']='Avenida Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.lenght) // irá gerar um undefined

