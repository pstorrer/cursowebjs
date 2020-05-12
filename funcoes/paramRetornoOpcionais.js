function area(largura, altura){
    const area = largura * altura
    if(area>20)
        console.log('Valor acimda do permitido: ', area, 'm2')
    else
        return area
}
area(10,3)
console.log(area(2))
console.log(area(10,1))
console.log(area(2,3,4,5))
console.log(area(5,5))//imprime o valor acima e nao retorna, então retorno é undefined.