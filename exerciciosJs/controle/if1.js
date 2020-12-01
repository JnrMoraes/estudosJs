function soBoaNoticia(nota) {
  if (nota >= 7) {
      console.log('Aprovado com nota: ' + nota)
  }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor) {
    if (valor) {
        console.log('É verdade ...' + valor)
    }
}

seForVerdadeiroEuFalo() // cria undefined falso
seForVerdadeiroEuFalo(null) // falso
seForVerdadeiroEuFalo(undefined) // cria undefined falso
seForVerdadeiroEuFalo(NaN) //  falso
seForVerdadeiroEuFalo('') //  falso
seForVerdadeiroEuFalo(0) // falso

seForVerdadeiroEuFalo(-1) // verdadeiro
seForVerdadeiroEuFalo(' ') // verdadeiro 
seForVerdadeiroEuFalo('?') // verdadeiro 
seForVerdadeiroEuFalo([]) // verdadeiro 
seForVerdadeiroEuFalo([1, 2]) // verdadeiro 
seForVerdadeiroEuFalo({}) // verdadeiro 
