function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos *1000)
    })
}

falarDepoisDe(3, 'Falei depois de 3 segundos o/')
    .then(frase => frase.concat('!?!?'))
    .then(outraFrase => console.log(outraFrase))