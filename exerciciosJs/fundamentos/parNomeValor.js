//par nome/valor
const saudacao = 'Opa!' // contexto léxico 1

function exec(){
    const saudacao =  'Falaaaa' // contexto lexico 2
    return saudacao
}

//Obejtos são grupos aninhados de pares  nome/valor

const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: ' Rua Sem Fim',
        numero: 321
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)