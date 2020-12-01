const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1} -> ${nome}`);
});

//arrow function
aprovados.forEach(nome => console.log(nome))

//passar para uma variavel a função
const listaAprovados = aprovados => console.log(aprovados)
aprovados.forEach(listaAprovados)


// por conveção o foreach recebe 3 parmametrs 
aprovados.forEach(function (nome, indice, array) {  // nome, indice 3 terceiro o proprio array, mais que isso é undefined 
    console.log(`${indice + 1} -> ${nome}`);
    console.log(array) // recebe o proprio array todo
  });