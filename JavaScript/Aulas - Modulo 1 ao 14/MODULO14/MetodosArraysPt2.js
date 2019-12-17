// método indexOf()
// procura se um valor existe em algum indice do array

var arr = [ 1, 2, 3, 4, 5 ]

// retorna a posição aonde está esse valo no array
console.log( arr.indexOf( 3 ))
// se não exister ele retorna -1
console.log( arr.indexOf( 10 ))

// posso também realizar a pesquisa apartir de um ponto, colocando um outro parametro
console.log( arr.indexOf( 1, 2)) // existe 1, da posição dois adiante?

// método lastindexOf
// mesmo princípio do indexof porém começa de trás para frente

console.log( arr.lastIndexOf( 1, 2 )) 


// método isArray()
// verifica se o elemento é array

console.log( Array.isArray( arr ))
