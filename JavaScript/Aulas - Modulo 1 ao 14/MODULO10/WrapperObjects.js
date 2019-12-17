// valores primitivos não são objetos

// um objeto em java script sempre terá propriedades e métodos

var nameTwo = "Maxsuel"

console.log( nameTwo.length ); // tamanho da string 

// PQ que eles tem propriedadades?

// construtores -> objetos ou funções que cria novos objetos

var name = new String ("Maxsuel")
var age = new Number ( 30 )  /// esse construtor na verdade é um objeto '---'
var ninja = new Boolean ( false )


console.log ( nameTwo.length ) // retorna o tamanho, no caso, da string
console.log ( name.valueOf() )  // retorna o valor do objeto

// console.log ( nameTwo.valueOf() ) --> erro pois valueOf não funciona em valores primitivos


// conversor de variáveis

var myVar = Number ( "10" )
var myVar2 = String ( 10 )

console.log( myVar )
console.log( myVar2 )

// o javascript tem tipagem do estilo dinâmica, ela já converte para você o tipo de variável que você deseja sem precisar
// que você nomeie.

