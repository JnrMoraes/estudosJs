function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') // cai no primeiro tratamento da função funcioanarOuNao que esta dentro de um then ou irá para o catch
            if (Math.random() < chanceErro){
                reject('Ocorreu um erro')
            } else {
                resolve (valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

funcionarOuNao('Testando ...', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then( // tratando um erro dentro de um then não cai no catch
        v => consol.log(v),
        err => console.log(`Erro especifico dentro do um then: ${err}`)
    )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro geral: ${err}`))
    .then(() => console.log('Fim!')) // após catch nenhum valor se®a obtido