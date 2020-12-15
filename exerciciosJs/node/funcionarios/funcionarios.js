const url = ' http://files.cod3r.com.br/curso-js/funcionarios.json';
/* deu erro quando apontei ./ = require('./axios') */
const axios = require('axios'); // Axios cliente https. Faz requisições para algo que esta remoto 
 const chineses = f => f.pais === 'China'
 const mulheres = f => f.genero ==='F'
 const menorSalario = (func, funcAtual) => {
     return func.salario < funcAtual.salario ? func : funcAtual
 } 

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios);

    
    // mulheres com menor salario 

    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)

})

