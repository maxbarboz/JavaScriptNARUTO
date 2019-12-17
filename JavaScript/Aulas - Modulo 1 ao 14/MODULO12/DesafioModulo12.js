/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

( function(){

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

console.log( 'Propriedades de "person" : ');
var person = {
    nome: "Maxsuel",
    segundoNome: "Storch",
    ano: 2019
}

console.log(  person );



/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/

console.log( Object.keys( person ) )

/*
Crie um array vazio chamado `books`.
*/
var books = [ ]

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

console.log( '\nLista de livros:'  );
    books.push({
        nome: "é isso livro",
        pages: 123
    })
    books.push({
        nome: "é isso livro2",
        pages: 1231
    })
    books.push({
        nome: "é isso livro3",
        pages: 13
})

/*
Mostre no console todos os livros.
*/
console.log( books );

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log ( books.pop () )

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log( books )

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
/*
Mostre os livros nesse formato no console:
*/

var booksJSON = JSON.stringify( books )
console.log( booksJSON )
/*
Converta os livros novamente para objeto.
*/
// ?

console.log( '\nAgora os livros são objetos novamente:' );
booksJSON = JSON.parse( booksJSON )
console.log( booksJSON )

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/


// sistema parecido com matriz
for (var i = 0 ; i <  books.length ; i++){

    for(var prop in books[i]){
       console.log( prop + " : " + books[i][prop])
    }

}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

var myName = [ "M", "a", "x"]


/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
console.log( myName.join( "" ) ) // junta a string

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/

console.log( myName.reverse().join( "" ) ) // inverte o vetor

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

console.log( myName.sort() ) // ordena de modo alfabético

}) ();