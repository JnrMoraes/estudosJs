const alunos = [
    {notas: 'João',     nota: 7.9},
    {notas: 'Maria',    nota: 8.5},
    {notas: 'Alice',    nota: 6.2},
    {notas: 'José',     nota: 4.3},
    {notas: 'Cristina', nota: 9.6},
]

// Imperativo demostra como tem que ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length)

// Declarativo demostra o que ter que ser feito - provome o reuzo - mais nivel intermediário

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)

