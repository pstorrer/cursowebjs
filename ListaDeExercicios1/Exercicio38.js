/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/
function imprimeImparesEntre(valor1=0, valor2=100){
    maior = valor1 > valor2 ? valor1 : valor2
    menor = valor1 < valor2 ? valor1 : valor2
    if(!(menor%2))
        menor+=1
        for(menor; menor<=maior; menor+=2){
            console.log(menor)
        }
}

imprimeImparesEntre(1,15)
imprimeImparesEntre(16,0)
imprimeImparesEntre(2,17)
imprimeImparesEntre(18,3)
