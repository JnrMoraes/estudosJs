// enquanto for in intera encima de indices, o for of intera encima de valores

for (let letra of "Cod3r") {
  console.log(letra);
}

// for in encima dos indices
const assuntoEcma = ["Map", "Set", "Promise"];
for (let i in assuntoEcma) {
  console.log(i);
}

// for of encima dos valores
for (const assunto of assuntoEcma) {
  console.log(assunto);
}

// for of encima de um Map, abordando o assunto chave valor, chave e somente valor
const assuntoMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (const assunto of assuntoMap) {
  console.log(assunto);
}

for (const chave of assuntoMap.keys()) {
  console.log(chave);
}

for (const valor of assuntoMap.values()) {
  console.log(valor);
}

//destructing a Map

for (let [ch, vl] of assuntoMap.entries()) {
  console.log(ch, vl);
}

// set

const set = new Set(["a", "b", "c"]);
for (let letra of set){
    console.log(letra)
}