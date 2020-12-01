const carrinho = [
  '{"nome":"Borracha", "preco": 3.45}',
  '{"nome":"Caderno", "preco": 13.90}',
  '{"nome":"Kit Lapis", "preco": 41.22}',
  '{"nome":"Caneta", "preco": 7.50}',
];

// Retornar um array apenas com os preços
const paraObjeto = (json) => JSON.parse(json); // transforma para obj o texto
const apenasPreco = (produto) => produto.preco; // quando transformado para obj, consigo acessar o atributo preço
const paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;
const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(paraDinheiro);
console.log(resultado);

// formato mais simples - intermediario
const carrinho2 = [
  '{ "nome": "Mochila", "preco": 199.90 }',
  '{ "nome": "Livro", "preco": 25.90 }',
  '{ "nome": "Calculadora", "preco": 149.90 }',
  '{ "nome": "Estojo", "preco": 5.50 }',
];

const parseEPreco = (elemento) => JSON.parse(elemento).preco;
const arrayDestino = carrinho2.map(parseEPreco).map(paraDinheiro);
console.log(arrayDestino);
