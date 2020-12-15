const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // usado para instanciar quando é uma função 
const contadorD = require('./instanciaNova')()

contadorA.inc();
contadorA.inc();

console.log(contadorB.valor); // valor fica em cache mesmo quando chamado de volta


contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor); // no contadorD são novas instancias criadas a partir de uma função Factory


