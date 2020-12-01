
// Funcionamento interno do map
Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this)) // elemento atual, o indice o o elemento original
        }
        return newArray
    }


const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.50}',
  ];
  
  // Retornar um array apenas com os preços
  const paraObjeto1 = (json) => JSON.parse(json); 
  const apenasPreco1 = (produto) => produto.preco; 

  
  const resultado = carrinho.map2(paraObjeto1).map2(apenasPreco1);
  console.log(resultado);


// versão mais avançada

  Array.prototype.map3 = function(callback){
    const novoArray=[]
    for (let [index, el] of this.entries()) {
        novoArray.push(callback(el, index, this))
    }
 
    return novoArray
}
 
const carrinho3 = [
    '{"nome": "Roda", "preco": 3.23}',
    '{"nome": "Chave", "preco": 100}',
    '{"nome": "tapete", "preco": 14.5}',
 
]
 
//Retornar um array apenas com os preços
 
const paraObjeto2 = json => {
    return JSON.parse(json)
};
const apenasPreco2 = produto => produto.preco
 
const resultado2 = carrinho.map3(paraObjeto2).map3(apenasPreco2)
console.log(resultado2);

// O [index, el] é referente ao [índice, elemento] do destructuring, e só é possível por causa do this.entries()
// Com essa solução o seu for...of funciona corretamente e é possível assim imprimir todos os preços.