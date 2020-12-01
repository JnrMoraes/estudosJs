const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callBack
const notasBaixas1 = [];

for (const i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(`Sem call back ${notasBaixas1}`);

// usando callBack

const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(`Com call back ${notasBaixas2}`)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(`Usando arrow function tudo junto ${notasBaixas3}`)

const notasMenorQue7 = nota => nota < 7 
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(`Usando arrow mas guardando em uma variavel ${notasBaixas4}`)