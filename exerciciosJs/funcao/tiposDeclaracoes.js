// tipos de diferentes de declarar funções pois geram impactos diferentes também


// function declaration 
console.log(soma(3,5))
//  pode ser chamada antes dela - interpretador le e carrega tudo antes 
function soma(x, y) {
  return x + y;
}

// function expression - declara uma função anonima e atribui a uma constante
// não pode chamar ela antes de ser declarada
const subtracao = function (x, y) {
  return x - y;
};
console.log(subtracao(3,5))


// named function expression - uma mescla das 2 formas - pouco usada mas aparece no debug e stackTrace
// não pode chamar ela antes de ser declarada
const multiplicacao = function mult(x, y) {
  return x * y;
};
console.log(multiplicacao(3,5))

