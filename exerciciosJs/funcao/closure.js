// Escopo criado quando uma função é declarada, se chama Closure
// Esse escopo permite a função acessar e manipular variáveis externas `a função

// contexto lexico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())