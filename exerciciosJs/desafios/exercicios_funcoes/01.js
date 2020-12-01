// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.


function retornaOperacoesMatematicas( num1, num2) {
    const soma = num1 + num2
    const subtrai = num1 - num2
    const multiplica = num1 * num2
    const divide =  num1 / num2
    console/console.log(`As operações feitas foram:
                            soma: ${soma}                        
                            subtrai ${subtrai}
                            multiplica: ${multiplica}
                            divide: ${divide}
    `); 
}

retornaOperacoesMatematicas(5, 5)