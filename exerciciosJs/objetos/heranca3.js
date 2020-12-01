const pai = { nome: 'Pedro', corCabelo:'preto'}

const filha1 =  Object.create(pai)
filha1.nome = 'Bia'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value:'Bia', writable: false, enumerable: true} // enumerable:true deixa aparecer o atributo quando solicitado
})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`Minha filha ${filha2.nome} tem cor de cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // mostra somente o atributo do obj e não o da herança 
console.log(Object.keys(filha2)) // [ 'nome' ]

// tras todos os atributos, proprios e herdados
for (let key in filha2){
    filha2.key 
}

for (let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}

 