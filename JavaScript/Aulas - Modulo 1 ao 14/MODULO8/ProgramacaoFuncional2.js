// programacao funcional 2

// podemos retornar funções também

function adder ( x ){
    return function ( y ){
        return x + y;
    }
} 

// como chamar essa função?

var result = adder( 2 ) ( 3 )
console.log ( result )

// ou

var result = adder( 2 )
result = result( 3 )
console.log ( result )
