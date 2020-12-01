Array.prototype.forEach2 = function (callback) { // callback como parametro é a função passada
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // recebe 3 paramentros da funcão passada que são
        //this é acessando o  indice 
        // o segundo é o próprio i 
        // o 3 é o elemento completo 
        }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1} -> ${nome}`);
});