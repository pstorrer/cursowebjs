const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//mulher chinesa com menor salario
filtroChina = e => e.pais=='China'
filtroMulher = e => e.genero == 'F'
menorSalario = (funcAnterior, funcAtual)=> funcAnterior.salario<funcAtual.salario ? funcAnterior : funcAtual


axios.get(url).then(response =>{
    const funcionarios = response.data
    func = funcionarios.filter(filtroChina).
                        filter(filtroMulher).
                        reduce(menorSalario)
    console.log(func)
})