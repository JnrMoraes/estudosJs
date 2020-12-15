const tecnologias = new Map();
tecnologias.set("React", { framework: false });
tecnologias.set("Angular", { framework: true });

console.log(tecnologias.react); // undefined
console.log(tecnologias.get("React")); // { framework: false }
console.log(tecnologias.get("React").framework); // false

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Obejto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((valor, chaves) => { // função callback primeiro passa o valor depois a chave
  console.log(chaves, valor);
});

console.log(chavesVariadas.has(123)) //para ver se contém
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size) // 2 após deletar 1

chavesVariadas.set(123, 'a')
chavesVariadas.set(123,'b')
console.log(chavesVariadas)