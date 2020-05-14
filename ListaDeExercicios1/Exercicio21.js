/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/
function valorPlano(idade){
    if(idade>60)
        return 230
    if(idade>30)
        return 195
    if(idade>10)
        return 150
    return 180
}
console.log(valorPlano(5))
console.log(valorPlano(12))
console.log(valorPlano(35))
console.log(valorPlano(65))