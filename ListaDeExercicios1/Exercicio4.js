/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
function divisaoComResto(dividendo, divisor){
    resultado = Math.floor(dividendo/divisor)
    resto = dividendo%divisor
    console.log(`Resultado de ${dividendo}/${divisor}=${resultado} e o resto=${resto}`)
}

divisaoComResto(2,3)
divisaoComResto(6,2)
divisaoComResto(234,22)