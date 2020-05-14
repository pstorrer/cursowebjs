/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.*/
function anuidadeApagar(mes, valor){
    if(mes>1)
        return anuidadeApagar(mes-1, valor*1.05)
    return valor
}
console.log(anuidadeApagar(1, 100))
console.log(anuidadeApagar(2, 100))
console.log(anuidadeApagar(3, 100))
console.log(anuidadeApagar(11, 100))