// método map

var arr = [ 1, 2, 3, 4, 5 ]

var map = arr.map (function( item, index, array){

    // cria um novo vetor
    return item + 2;
})

console.log ( arr )
console.log ( map )
// método filter
// BASICAMENTE FUNCIONA DA MESMA FORMA QUE O MAp

var filter = arr.filter ( function( item, index, array){

    // filtra só os valores que você quer 
    if( item > 2)
    return item
} )

console.log( filter )