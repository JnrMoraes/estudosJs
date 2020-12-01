// sem retorno

function imprimiSoma(a,b){
    console.log(a + b);
}

imprimiSoma(2, 3);
imprimiSoma(2); //retorna NaN
imprimiSoma(2, 10, 5, 6, 7, 8 ) //soma somente do valore que foram passados como paramentros, o resto é descartado
imprimiSoma() // reotnrna NaN

// com retorno

function soma (a, b = 0){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // tenta somar numero passado ao b = 0 a undefined pq não passou nada de paramentro