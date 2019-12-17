// método slice

var arr = [ 1, 2, 3, 4, 5 ]

//o splice possui dois parâmetros que são o primeiro valor, onde começa, e o segundo, a onde termina
// o ultimo parâmetro passado é retornado um antes desse índice
console.log( arr.slice(0 , 3 ) )

// método splice -> modofica o array principal, pode tanto adicionar quanto remover itens do array

console.log( arr.splice(3) )
console.log( arr )

// o primeiro valor diz aonde eu começo retirar e o segundo quantos valores apartir dali eu retiro

arr = [ 1, 2, 3, 4, 5 ];

console.log( arr.splice (1 , 3))
console.log( arr )

// adicionado valores com splice

// primeiro valor indica aonde começa, segundo valor indica que não se quer retirar nada, e terceiro ou mais valores informam quais valoes serão adicionados no array
console.log( arr.splice ( 1, 0, 2,3,4 ))
console.log( arr )