/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 * triângulo).
 */


function testaTodosOsLadosDosTriangulos(x,y,z) {
    if(x == y && y == z && z == x){
        return 'Equilatero'
    } else if (x == y || y == z || z == x ) {
        return 'Isoceles'
    } else {
        return 'Escaleno'
    }
}

 console.log(testaTodosOsLadosDosTriangulos(3,2,3))

// Refatorar código para usar uma regra em cada função 18/11/2021

// const equilatero = (x, y, z) => (x == y && y == z && z == x ? true : false);
// const isoceles = (x, y, z) => (x == y || y == z || z == x ? true : false);
// const escaleno = (x,y,z) => (x != y && y != z && z != x ? true : false) 

// function testaQualTriangulo(){}

// console.log(equilatero(3, 3, 3));
// console.log(isoceles(3, 3, 2));
//  console.log(escaleno(3,2,1))