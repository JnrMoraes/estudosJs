// Arrow function

const soma = (a, b) => a + b;
console.log(soma(3, 2));

const soma2 = (a, b) => {
  // para mais de uma linha colocar return
  return a + b;
};
console.log(soma2(5, 44));

//Arrow function (this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1();
lexico2();

// Paramentro default
function log(texto = "Node") {
  console.log(texto);
}
log();
log("Sou mais forte");

// Operador rest

function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}
console.log(total(2, 3, 4, 5, 6));
