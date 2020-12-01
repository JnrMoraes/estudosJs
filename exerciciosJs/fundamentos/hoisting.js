// curiosidade sobre hoisting, só acontece em var

console.log('a = ', a)
var a = 2
console.log('a = ', a)

// a parte de cima seria igual a isso
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)


