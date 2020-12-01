// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function funi() {}

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em uma Array
const array = [
  function (a, b) {
    return a + b;
  },
  funi,
  fun2,
];
console.log(array[[0](2, 3)]);

// Armazenar em um atributo de objeto

const obj = {};
obj.falar = function () {
  return "Opá!";
};
console.log(obj.falar());

// Passar função como paramentro
function run(fun) {
  fun();
}

run(function () {
  return console.log("Executando ....");
});

// Uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}
soma(2,3)(4)
//ou
const cincoMais = soma(2,3)
cincoMais(4)