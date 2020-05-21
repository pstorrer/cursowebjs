/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/
function pa(n, a1, r){
    console.log(`P.A.\nn1=${a1}`)
    soma=a1
    for(let i=2; i<=n; i++){
        console.log(`n${i}=${a1+=r}`)
        soma+=a1
    }
    console.log(`Soma=${soma}`)
}
pa(5, 0, 5)
function pg(n, a1, r){
    console.log(`P.G.\nn1=${a1}`)
    soma=a1
    for(let i=2; i<=n; i++){
        console.log(`n${i}=${a1*=r}`)
        soma+=a1
    }
    console.log(`Soma=${soma}`)
}
pg(3, 3, 3)