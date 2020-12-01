// Lembrando que na arrow function o this irá sempre estar atrelado a ela

// sem o comportamento bind na função retorna uma NaN por não apontar amarrar o objeto com o atributo

function Pessoa() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa 

// com o comportamento do Bind na função
function Pessoa1() {
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa1 

// drible para apontar de certo forma a referencia this

function Pessoa2(){
    this.idade = 0

    const self = this
    setInterval(function(){

        self.idade++
        console.log(self.idade)
    }, 1000)
}

