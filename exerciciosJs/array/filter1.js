const produtos = [
  { nome: "Notebook", preco: 2499, fragil: false },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plastico", preco: 18.99, fragil: false },
  { nome: "Copo de Titanium", preco: 3000.99, fragil: false },
];

// Usando 2 funções

const produtosMaisQue2000 = (produto) => produto.preco > 2000;
const produtosNaoFrageis = (produto) => !produto.fragil 
const resultado = produtos.filter(produtosMaisQue2000).filter(produtosNaoFrageis)
console.log(resultado)


// Resolvendo tudo de uma vez, modo ruim, pois as REGRAS ficam agrupadas
// console.log(
//   produtos.filter(function (prod) {
//     // function é um callback pedido pelo filter prod é cada um dos produtos do array de obj
//     if (prod.preco > 2000 && !prod.fragil) {
//       return true;
//     }
//   })
// );
