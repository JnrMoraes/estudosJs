const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const bancoDados = require('./bancoDadosMock')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send( bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res) =>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) =>{
    const produto = bancoDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)  // converte para um JSON
})

app.put('/produtos/:id',(req, res) =>{
    const produto = bancoDados.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
} )

app.delete('/produtos/:id',(req, res) =>{
    const produto = bancoDados.excluirProduto( req.params.id)
    res.send(produto)
} )


app.listen(porta, () => {
    console.log(`Servidor executando na porta: ${porta}.`)
})
