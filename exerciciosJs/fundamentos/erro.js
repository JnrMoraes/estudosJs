function tratarErroELancar(erro) {
    // pode mandar o que quiser
    // throw new Error('....')
    // throw false
    
    throw{
        nome: erro.mname,
        msg: erro.message,
        date: new  Date
    }
}

function imprimirNomeGritado(obj) {

    try {
    console.log(obj.name.toUpperCase() + '!!!')
        
    } catch (error) {
        tratarErroELancar(erro)
    } finally {
        console.log('final')
    }
}

//const obj = { nome: 'Roberto' } // erro no atributo nome era name para gerar erro e cair no catch e ir no finally
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)  