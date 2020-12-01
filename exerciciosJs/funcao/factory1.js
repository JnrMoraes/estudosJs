// função Factory criada para criar novas instancias de objetos com as mesmos atributos

// Factory simples

function criarUmaPessoa() {
  // eg sem parametros
  return {
    nome: "Ana",
    sobrenome: "Silva",
  };
}

console.log(criarUmaPessoa());
