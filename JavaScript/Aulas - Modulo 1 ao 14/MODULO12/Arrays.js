// Arrays

var arr = []

arr.push( "É isso" )
arr.push( "É isso/2" )

console.log ( arr )

arr.pop() // remove do final

console.log( arr )

var last = arr.pop() // armazenando em variável
console.log( last )

// ----------------------------------------------------------------------------------------------------//

var arry = {
    comida: "macarrão",
    boa: "sim"
}

console.log( arry.join() ) // juntar em string separado por vírgulas

// modificam o array original
console.log( arry.reverse() ) // inverte o array
console.log( arry.sort() ) // ordena por ordem alfabética



