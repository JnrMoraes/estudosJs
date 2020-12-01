const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar  = pessoa.falar
falar() // conflitos de paradigmas: funcional e OO 

const falarDaPessoa =  pessoa.falar.bind(pessoa)
falarDaPessoa()