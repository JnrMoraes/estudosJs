let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // mostra ainda o valor
console.log(!!isAtivo); // negando 2x volta ao valor booleano do valor dado a ela

console.log ('Os verdadeiros: ->')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log ('Os falsos: ->')

console.log ('Os verdadeiros: ->')
console.log (!!0)
console.log (!!'')
console.log (!!null)
console.log (!!NaN)
console.log (!!undefined)
console.log (!!(isAtivo = false))

console.log ('Finalizando: ->')
console.log (!!('' || null || 0 || ' '))
console.log (('' || null || 0 || 'epa' || 123))

console.log ('Outras referencias ->')

let nome = ''

console.log (nome || 'Desconhecido') // imprime desconhecido pq a primeria opção é falsa

