const porta = 3003
const bodyParser = require('body-parser')
const bancoDados = require('./bancoDados')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next)=>{
    res.send(bancoDados.getProdutos()) //converte para JSON 
})

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDados.getProduto(req.params.id))
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancoDados.salvarProduto({
        id:req.body.id,
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //JSON
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDados.salvarProduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = bancoDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log('Servidor executando na porta', porta)
})