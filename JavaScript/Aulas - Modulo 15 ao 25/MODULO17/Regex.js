// regex

// expressões regulares
// se escrevem dentro de double barra
console.log( / m / )
// manipular strings

/* Flags
g -> glocal 
i - insensitive
*/

/* Termos
\w: caracteres e _
\d: números
*/

// Objeto RegExp();

var texto = "ALOOOO2OOOOO1Oooooo3ooo"

console.log ( texto.match(/O/gi) ) // se lê -> busca O no geral sem sensitive
console.log ( texto.match(/\w/gi) ) // todas letras do texto
console.log ( texto.match(/\d/gi) ) // todos números do texto
console.log ( texto.match(/\d\d/gi) ) // todos dois números juntos

// classe de caracteres ou listas

// | -> ou
// [ ] -> ou

console.log( texto.match( /AL|O/gi ) )
console.log( texto.match( /[ALO]/gi ) )

// agrupamento de caracteres
// () -> AGRUPAMENTO

console.log( texto.match( /(AL)(0)/gi ))

// [a-z] [1-9]
console.log( texto.match( /[a-z]/gi ) )
console.log( texto.match( /[1-9]/gi ) )

// replace

console.log( texto.replace(/\w/gi, "QWE"))

console.log( texto.replace( /(a-z)/gi , "$1"))
console.log( texto.replace( /(\w)/gi , "--$1"))
console.log( texto.replace( /(\w)/gi , "--$1").toLowerCase())

var name = "Maxsuel"

name = name.replace(/(\w)(\w)/g , function(capturaTotal, letra1 , letra2){
    return letra1.toUpperCase() + letra2.toLowerCase();
})

console.log( name )