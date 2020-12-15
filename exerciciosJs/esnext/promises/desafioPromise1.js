//minha solução

const fs = require("fs");

new Promise((resolve) => {
    const fileDados = __dirname + "/dados.txt";
    const conteudo = fs.readFileSync(fileDados, "utf-8");
    resolve(conteudo.toString())
})
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)

// solução da aula

// const fs = require('fs')
// const path = require('path')

// function lerArquivo(caminho){
//     return new Promise(resolve =>{
//         fs.readFile(caminho, function(_, conteudo){
//             resolve(conteudo.toString())
//         })
//         console.log('Depois de ler')
//     })
// }

// const caminho = path.join(__dirname, 'dados.txt')

// lerArquivo(caminho)
//     .then(dados => console.log(dados))