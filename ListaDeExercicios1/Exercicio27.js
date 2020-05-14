/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/
function crescimento(altura1, taxa1, altura2, taxa2){
    if(altura1>altura2 || altura2>altura1){
        console.log(aux=(altura1>altura2 ? `Altura 1 maior` : `Altura 2 maior`))
        if((altura1>altura2 && taxa1>taxa2)||(altura2>altura1 && taxa2>taxa1))
            console.log('A taxa do maior tambem é maior, nunca sera ultrapassado')
        else{
            let i=0;
            while(aux==(altura1>altura2 ? `Altura 1 maior` : `Altura 2 maior`)){
                altura1+=taxa1
                altura2+=taxa2
                i++
            }
            console.log(`Depois de ${i} anos ${altura1>altura2 ? `Altura 1 maior` : `Altura 2 maior`}`)
        }
    }
    else
        console.log('Não há diferença de altura, a maior taxa será maior')

}
crescimento(1.5, 0.2, 1.7, 0.3)
crescimento(1.7, 0.2, 1.5, 0.3)
crescimento(1.7, 0.2, 1.7, 0.3)