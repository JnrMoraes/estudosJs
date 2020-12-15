// ES8: Object.values Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // retorna valores do meu obj [ 1, 2, 3 ] nova versão de Object.keys
console.log(Object.entries(obj)); // retorna uma matriz, arrays de arrays [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


// Melhorias na Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'ooooi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Classes toda classe irá ser converstida internamente em uma função

class Animal{}
class Carrocho extends Animal{
    latir(){
        return 'au au!'
    }
}

console.log(new Carrocho().latir())