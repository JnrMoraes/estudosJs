function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0;

  // método publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      // tentou acelerar mais que o possível, volta para velocidade máxima
      velocidadeAtual = velocidadeMaxima;
    }
  };

  // método publico para acessar um atributo privado, usado para não modificar valores por fora
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

const uno = new Carro(); // pode ou não usar os parenteses caso não queria passar paramentros
uno.acelerar();
console.log(uno.getVelocidadeAtual()); // 5 pois foi chamado apénas uma vez

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual()); // 60 pois foi chamado 3x

console.log(typeof Carro); // é uma funcão pois a funções dentro dela
console.log(typeof ferrari); // é um OBJ pois foi instanciado a partir de Carro e possui como valor seus devidos atributos
