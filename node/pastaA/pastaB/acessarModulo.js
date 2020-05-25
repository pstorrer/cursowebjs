const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const moduloB = require('C:\\Users\\Curso SQL\\Documents\\GIT\\cursowebjs\\node\\moduloB.js')
console.log(moduloB)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res)=>{
    res.write('bom dia!')
    res.end()
}).listen(8080)
//digitar no browser: localhost:8080

const c=require('./pastaC')
console.log(c.ola2)