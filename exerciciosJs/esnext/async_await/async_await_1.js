function esperarPor(tempo = 2000) {
    return new Promise (function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Execuntando promise 1 '))
//     .then(esperarPor)
//     .then(() => console.log('Execuntando promise 2 '))
//     .then(esperarPor)
//     .then(() => console.log('Execuntando promise 3 '))

async function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornaValorRapido(){
    return 20
}
    
async function executar() { // para ter um formato sincrono colocar o await na frente da função
    
    let valor = await retornarValor()
    // let valor = await retornaValorRapido()


    await esperarPor(1500)
    console.log(`Async/Await valor 1: ${valor}`)

    await esperarPor(1500)
    console.log(`Async/Await valor 2: ${valor + 1 }`)
    

    await esperarPor(1500)
    console.log(`Async/Await valor 3: ${valor + 2}`)

    return valor + 3
    
}
// não rola receber uma valor direto no modulo Node
// const v = executar()
// console.log(v) // Promise { <pending> }

// const v = await executar()
// console.log(v) // SyntaxError: await is only valid in async function


executar().then(console.log)

// maneira para pegar resultado de dentro de uma função asincrona
// async function executarDeVerdade(){
//     const valor = await executar()
//     console.log(valor)
// }

// executarDeVerdade()