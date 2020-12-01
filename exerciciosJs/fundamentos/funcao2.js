// armanzenando funcao em variavel

const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

// armazenando funcao arrow em variavel

const soma = (a, b) =>{
    return a + b;
}
console.log(soma(2, 3))

//
// retorno implicito

const subtracao = (a, b) => a - b // quando nao tem as chaves, esta intitulado que ira somente fazer uma curta funcao
console.log(subtracao(2, 3))


const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')