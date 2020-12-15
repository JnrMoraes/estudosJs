function falarDepoisDe(segundos, frase) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, 'Que legal ')
  .then((frase) => frase.concat("?!?!"))
  .then((outraFrase) => console.log(outraFrase));

function falarDepoisComReject(segundo, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(frase);
    }, segundo * 1000);
  });
}

falarDepoisComReject(2, 'Recebido no catch')
    .then((frase) => console.log(frase))
    .catch(e => {
        console.log(e)
    })