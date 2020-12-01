const valor = ' Global'

function minhaFuncao() {
    console.log(valor)

}

function execute() {
    const valor = 'exec'
    console.log(valor) // resultado é Global, pois dentro do JavaScript ele ainda mantém sua prioridade de leitura, mesmo que estaja longe do local que foi chamadao
}