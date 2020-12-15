const url = ' http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais ==='China';       // usar filter
const mulheres = f => f.genero === 'F';      // usar filter
const menorSalario = (func, funcAtual) => { // usar reduce
    return func.salario < funcAtual.salario ? func : funcAtual

};

axios.get(url).then(response =>{
  const funcionarios = response.data;
//   console.log(funcionarios);

    // mulher chinesa com menor salario

    const func = funcionarios
            .filter(chineses)
            .filter(mulheres)
            .reduce(menorSalario)
          
            
            let json = JSON.stringify(func)

            console.log( `Menor salario ${json}`);
            
            // console.log(JSON.stringify(func,(key,value) => {
            //     if(typeof value === 'number'){
            //         if(value > 0){
            //             return undefined;
            //         }
            //     }
            //     return value
            // }));

})


