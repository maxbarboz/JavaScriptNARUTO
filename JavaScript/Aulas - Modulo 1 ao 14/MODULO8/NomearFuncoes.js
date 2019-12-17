// importância de nomear funções JS

// não fazer isso

var func = function( ){ }

// fazer isso

var funct = function funct( ){ }

// por que nomear? -> FACILITA O DEBUG; CONSEGUE OBTER O NOME

// EXEMPLO DE FUNC

// atribuindo a variável
var functeste = function functeste(){
    console.log( "hi" )
}

functeste()
console.log( functeste.name )
