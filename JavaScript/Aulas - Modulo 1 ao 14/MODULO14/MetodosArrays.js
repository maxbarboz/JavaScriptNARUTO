// método reduce
// reduz um array

var arr = [ 1, 2, 3, 4, 5 ]

// não modifica o array principal
var reduce = arr.reduce ( function ( x, y, index, array){
// x é todo valor acumulado
// y é o valor atual

    return x + y;

} , 0); // < - esse valor pode ou não existir

console.log( reduce )



// reduce right -> reduce invertido

var name = [ "M", "a", "x", "s", "u", "e", "l" ]

var reduceR = name.reduceRight( function(x, y, index, array){
    return x + y
}, 0)

console.log( reduceR )