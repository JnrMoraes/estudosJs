// Factory com paramentros

function criarProdutos(produto, preco) {
  return {
    produto,
    preco,
    desconto: 0.1 
  }
};

console.log(criarProdutos("Abacaxi", 7.45));
console.log(criarProdutos("Abacaxi", 17.45));
