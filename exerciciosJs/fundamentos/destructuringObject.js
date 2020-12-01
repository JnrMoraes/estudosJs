// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 100
    }
}

const { nome, idade }  = pessoa // a partir dessa linha tenho 2 variáveis que posso trabalhar, por isso destructuing
console.log(nome, idade)

const { nome: n, idade: i }  = pessoa // a partir dessa linha tenho 2 variáveis que posso trabalhar, nelas foram atribuidos os valores 
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // a partir dessa linha tenho 2 variáveis que posso trabalhar, uma irá ser undefined e outra já recebeu um valor booleano
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)