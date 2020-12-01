const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // retorna um espaço vazio mas não um erro
console.log(escola.charCodeAt(3)); // retorna o unicode
console.log(escola.indexOf('3'));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log('Escola'.concat(escola).concat("!"));
console.log('Escola' + escola + "!");
console.log(escola.replace(3, 'e')); //replace do local selecionado
console.log(escola.replace(/\d/,'e')); // expressao regular do regex - substitua todos os digitos pela letra e
console.log(escola.replace(/\w/g,'e')); // expressao regular do regex - substitua todas letras e os digitos pela letra e
console.log('Ana, Maria, Pedro'.split(','))
console.log('Ana, Maria, Pedro'.split(/,/)) //usando regex
console.log('Ana, Maria, Pedro'.split(/./)) //ver o pq fica assim no regex



