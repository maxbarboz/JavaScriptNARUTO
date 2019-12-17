// array são objetos disfarçados

// propriedades

var array = [ 1, 2, 3, 4, 5, 6, 7 ]

console.log ( array.join ( "-" ) ) // junta o vetor em forma de string, conforme o parametro que você passar
console.log ( array.toString () ) // junta o vetor em forma de string separados por vírgula
console.log ( array.reverse () ) // inverte o vetor
console.log ( array.sort() ) // coloca em ordem alfabética

// testando em obetos

var obj = {
    nome: "Maxsuel",
    lastnome: "Storch"
}

// só o toString pega em objeto ?
console.log ( obj.toString () ) // junta o vetor em forma de string separados por vírgula


//método concat para concatenar algo no vetor sem criar ou modificar o já existente
console.log( array.concat (5) )
console.log( array )

// método unshift -> adiciona ao começo do array um novo item

console.log( array.unshift( 0 ) )
console.log( array )

// método shift -> remove o primeiro item do array

console.log ( array.shift( ) )
console.log ( array )