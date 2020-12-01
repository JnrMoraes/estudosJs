console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Antonio Roberto de Moraes Junior'.reverse())

Array.prototype.first = function(){
    return this[0]
}

Array.log([1,2,3,4,5].first())

String.prototype.toString = function(){ // nunca substituir funcões que já existes
    return 'Lascou tudo!'
}
console.log('Escola Cod3r'.reverse())