//para instalar o lodash, pelo terminal: npm i lodash
const _ = require('lodash')
setInterval(()=>console.log(_.random(1,200)),2000)
//instalar o nodemon pelo terminal: npm i -g nodemon
//ao alterar um código, se rodar pelo: nodemon codigo.js, ele é atualizado durante a execução.