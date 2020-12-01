const soma = function (x, y) {
    return x + y
}

const imprimirResultado= function (a, b, operacao = soma) {
    return console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3, 4, soma)

imprimirResultado(3,4, function (x,y) {
    return x - y
})

imprimirResultado(3,4, (x, y) =>  x * y)

const pessoa = {
    falar: function () {
        console.log('Olár rapaiii!')
    }
}

pessoa.falar()

// nova versao do JavaScript

const pessoa2 ={
    falar(){
        console.log('Eae ManoOoOoOoOo!')
    }
}

pessoa2.falar()

