function dobro (a){
    return a * a

}
console.log(Math.PI.toFixed(4))
console.log(Math.floor(dobro(Math.PI)))

// funcao arrow por sintaxe precisa estar em uma variavel

const ola = function (){
    return 'Olá'
}


ola = () => 'Olá'
ola = _ => 'Olá' // possui parametro o underline é um paramentro nesse caso
console.log(ola())
