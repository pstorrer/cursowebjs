Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i<this.length; i++){
        if(callback(this[i],i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome:'Notebook', preco:2499, fragil:true,},
    {nome:'ipad', preco:1499, fragil:true},
    {nome:'copo vidro', preco:20, fragil:true},
    {nome:'pedra', preco:50, fragil:false}
]

prodCaros = produto => produto.preco>500

console.log(produtos.filter2(prodCaros))