/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/
function caixaEletronico(money){
    if(money>=100){
        console.log(`${Math.floor(money/100)} nota(s) de R$ 100.`)
        return caixaEletronico(money%100)
    }
    else if(money>=50){
        console.log(`${Math.floor(money/50)} nota(s) de R$ 50.`)
        return caixaEletronico(money%50)
    }
    else if(money>=10){
        console.log(`${Math.floor(money/10)} nota(s) de R$ 10.`)
        return caixaEletronico(money%10)
    }
    else if(money>=5){
        console.log(`${Math.floor(money/5)} nota(s) de R$ 5.`)
        return caixaEletronico(money%5)
    }
    else if(money>1){
        console.log(`${money} nota(s) de R$ 1.`)
        console.log('fim')
    } else console.log('fim')
}
caixaEletronico(125)
caixaEletronico(79)
caixaEletronico(25)
caixaEletronico(17)
caixaEletronico(12)
caixaEletronico(8)
caixaEletronico(234567)

