const produtos = [
    {nome:'Notebook', preco:2499, fragil:true,},
    {nome:'ipad', preco:1499, fragil:true},
    {nome:'copo vidro', preco:20, fragil:true},
    {nome:'pedra', preco:50, fragil:false}
]

prodCaros = produto => produto.preco>500
console.log(produtos.filter(function (p){
    return p.fragil
}))

console.log(produtos.filter(prodCaros))