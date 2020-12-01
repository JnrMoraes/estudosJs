Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
       if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

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
  const resultado = produtos.filter2(produtosMaisQue2000).filter2(produtosNaoFrageis)
  console.log(resultado)