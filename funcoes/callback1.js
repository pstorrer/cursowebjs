const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(marca, colocacao) {
    console.log(`${colocacao +1}.${marca}`)
}
fabricantes.forEach(imprimir)

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante))