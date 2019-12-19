// construtor de expressões regulares

var regex = new RegExp( "Maxsuel" )

console.log( regex )

// regex com numeros

var numberRegex = new RegExp( "\\d" )
console.log( numberRegex )

// métodos do construtor RegExp

console.log( /\w/.test( regex ) ) // -> testa se á aquilo no regex

var regex = /123/
console.log( /\d/g.exec(regex) ) // -> faz o casamento a cada vez executado
console.log( /\d/g.exec(regex) ) // -> faz o casamento a cada vez executado
console.log( /\d/g.exec(regex) ) // -> faz o casamento a cada vez executado/


// caracteres especiais de string podem ser usados em regex também

/*
1. O objeto RegExp() pode receber um segundo parâmetro, que são as flags:
- var justNumbersAndLetters = new RegExp( '[\\da-z]', 'gi' );
*/