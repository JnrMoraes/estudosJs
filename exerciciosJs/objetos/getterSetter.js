const sequencia = {
    _valor: 1, // anderline na frente - convenção no JS para dizer que irá ser somente acessivel dentro do objeto 
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não rola pois já esta definido no set que em regra
console.log(sequencia.valor, sequencia.valor)