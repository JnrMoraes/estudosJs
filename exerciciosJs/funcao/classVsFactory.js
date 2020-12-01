class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


// define melhor o objeto a qual irá acessar

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é na var pessoa: ${nome}`)
    }
}

const p2 =  criarPessoa('Joãão')
p2.falar()
