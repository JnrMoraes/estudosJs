const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimirNome(nome, indice) {
    console.log(`Posição ${indice +1 } fabricante ${nome}` )
}

fabricantes.forEach(imprimirNome)

fabricantes.forEach(function (fabricante) {
    console.log(`Normal function ${fabricante}`)
})

fabricantes.forEach(fabricante => console.log(`Arrow function ${fabricante}`))
