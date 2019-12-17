// operador unário de teste que retorna o tipo da variável

console.log( typeof 10 )
console.log( typeof "" )
console.log( typeof false )

// qualquer outro tipo de objeto que não seja uma function será objeto

console.log( typeof {} )
console.log( typeof [] )
console.log( typeof null )

// PQ NULL RETORNA OBJECT? -> ERRO NA IMPLEMENTAÇÃO !!!!!! '-----'

// SÓ UTILIZAR TYPEOF EM VALORES PRIMITIVOS

function sum ( num1, num2 ){
    return num1 + num2;
}

console.log ( sum( 10, 2) )
console.log( sum ( "JS", 10) )

// UTILIZANDO TYPEOF PARA COMPARAÇÃO EM IF

function mult ( x, y ){
    if(typeof x === "number" && typeof y == "number") // o teste de typeof retorna uma string como por exemplo "string", "number"
    return x * y;
}

console.log ( mult ( 3, 4 ) )