// Exemplo de callback no browser

document.getElementsByTagName('body')[0].onclick = function (e) { // não é obriagado declarar o evento 
    console.log('O evento ocorreu!!')                             // nesse caso não foi usado o evento 
}