Array.prototype.reduce2 = function (callback) {
  let acumulador = 0;
  for (let i = 0; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
};

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.reduce2(soma))


// passando o inicial tbm
Array.prototype.reduce3 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1;
    let acumulador1 = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
      acumulador1 = callback(acumulador1, this[i], i, this);
    }
    return acumulador1;
  };
  
  const soma1 = (total1, valor1) => total1 + valor1;
  const nums2 = [1, 2, 3, 4, 5, 6];
  console.log(nums2.reduce3(soma1, 21))