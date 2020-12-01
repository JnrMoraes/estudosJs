const ferrari = {
    modelo: 'F40',
    veloMax: 324
}

const volvo = {
    modelo: 'V40',
    veloMax: 200
}

console.log(ferrari.__proto__) // __proto__ para acessar qualquer atributo no elemento ferrari, não encontrou ele vai para um acima procurando acima na cadeia de prototipos
console.log(ferrari.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // null não há nada acima dele
console.log(ferrari.prototype) // não funciona, foi mensionado acima


function MeuObjeto(){}
console.log( typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype) // prototype esta presente apenas dentro de funções