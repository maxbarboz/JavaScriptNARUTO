// método forEach

var arr = [ 1, 2, 3, 4, 5 ]

// realiza basicamente a mesma lógica do for, porém é passada uma função, com valores item, index, array

arr.forEach(function ( item, index, array ){
    console.log( item , index , array )
})

// pra que serve?
// substitui o for 

// método Every()
// basicamente é um predicado do array, retorna sempre true ou false 

var every = arr.every( function( item ){
    // testa todos os valores do array
    return item > 3
})

// usar pra testar itens do array, como por exemplo, ver se todos sejam dividos por 2

console.log( every )


// método some
// testa alguns valores, por exemplo, se um já retornar true, ele já retorna isso

var some = arr.some( function( item ){
    return item > 3
})

console.log( some )