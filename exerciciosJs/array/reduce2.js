const alunos = [
    {nome: 'João'  , nota: 7.3, bolsista: false},
    {nome: 'Maria ', nota: 9.2, bolsista: true},
    {nome: 'Pedro' , nota: 9.8, bolsista: false},
    {nome: 'José'  , nota: 8.7, bolsista: true},
]

// todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista). reduce(algumBolsista))

// qual aluno é bolsista
const ehBolsista = alunos => alunos.bolsista
const resultado = alunos.filter(ehBolsista)
console.log(resultado)