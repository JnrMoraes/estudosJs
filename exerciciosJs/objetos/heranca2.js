// Cadeia de protótipos (prototype chain)  ou cadeia de heranças
Object.prototype.attr0 = '0' // experimento, não usar
const avo = { attr1: 'a'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'}
const filho = { __proto__: pai, attr3: 'c'}

console.log(filho.attr1)  // a
console.log(pai.attr1) // a
console.log(filho.attr2) // B
console.log(avo.attr3) // undefined a cadeia é somente para cima
console.log(filho.attr0) // 0
console.log(filho.attr3) // c - nesse caso ocorre o sombreamente por ter definido dentro do objeto

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h` 
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340 // shadowing - sobrescreveu a velocidade do obj carro
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super para não usar o mesmo metodo do obj, pois quero o do obj pai
    }
}

// estabelece uma relação entre objetos com a função setPrototypeOf(objeto, protótipo)
Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro) 

console.log(ferrari)  // { modelo: 'F40', velMax: 340 }
console.log(volvo) // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status())

