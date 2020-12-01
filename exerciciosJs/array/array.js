// Forma NÃO literal de trabalhar com array - não recomendado
let aprovados1 =  new Array('Bia', 'Carlos','Ana' ) 
console.log(aprovados1)

// Forma literal -> mais recomendada
aprovados2 = ['Bia', 'Carlos','Ana']
console.log(aprovados2[0])
console.log(aprovados2[1])
console.log(aprovados2[2])
console.log(aprovados2[3]) // retorna undefined
console.log(aprovados2)

// add mais elementos

aprovados2[3]= 'Paulo' // tbm funciona , mas não recomendado
aprovados2.push('Abia') // irá add na ultima posição sempre
console.log(aprovados2.length)

aprovados2[9] = 'Cesar' // irá existir mas as posições anteriores iram existir como undefined, por isso usar sempre o push
console.log(aprovados2) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Cesar' ]
console.log(aprovados2.length === undefined) // true
console.log(aprovados2.length === null) // false

console.log(aprovados2)
aprovados2.sort() // ordena o array - [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Cesar', 'Paulo', <4 empty items> ]
console.log(aprovados2)


delete aprovados1[1] // deleta mas coloca undefined no local, mantendo o tamanho original 
aprovados1.splice(1, 1 ) // usados para incluir ou EXCLUIR a quantidade escolhida a partir do indece escolhido primeiro
aprovados1.splice(1, 2 , 'ELEMENTE1', 'ELEMENTO2') // usados para incluir ou EXCLUIR a quantidade escolhida a partir do indece escolhido primeiro
console.log(aprovados1)

aprovados1.splice(1, 0, 'ELEMENTE3', 'ELEMENTO4' ) // inclui a partir do indice escolhido, reordena os valores
console.log(aprovados1)