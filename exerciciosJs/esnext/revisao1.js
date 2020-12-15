// let e const

{
  var a = 2;
  let b = 3;
  console.log(b); // 3
}

console.log(a); // 2 escopo global
// console.log(b) // undefined - variavel de bloco

// Template String

const produto = "iPad";
console.log(`${produto} é caro`);
console.log(`${produto} 
é 
caro`);

// Destructuring

const [l, e, ...tras] = "Cod3r"; // operador rest são 3 pontinhos ...tras
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = {nome: 'Ana', idade: 9}
console.log(i, nome)