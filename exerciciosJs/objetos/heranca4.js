function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(MeuObjeto.prototype == obj2.__proto__) // true

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome} :)`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar() // sobrescreve

const obj3= {}
obj3.__proto__= MeuObjeto.prototype // muda a referencia de Objct para MeuObjeto

obj3.nome = 'Obj3'
obj3.falar()


// comparações 
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype) // MeuObejto tem uma funcao que aponta tbm para function prototipe
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // atributo exite comom null mas undefined não existe