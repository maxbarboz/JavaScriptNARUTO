// java script no browser

// IIFE -> PASSANDO PARÂMETROS

( function(){

        "use strict";

        console.log( window )
        

})( window );

// estrutura if / while / for

( function(glo){

    "use strict";

    if(glo === window )
    console.log( "win é igual a window" )
    

})( window );

// objeto window possui alguns métodos

// window.alert

( function(glo){

    "use strict";
    window.alert( "Ta de base dmr?" )
    
})( window );

// window.prompt

( function(glo){

    "use strict";
    var resp = window.prompt( "Ta de base dmr?" )
    if( resp = "OK"){
        console.log( "ta loco menor" )
    }
})( window );

// window.confirm

( function(glo){

    "use strict";
    var resp = window.confirm( "Ta de base dmr?" )
    if( resp = "OK"){
        console.log( "ta loco menor" )
    }
})( window);

// window.document -> representa o documento ( HTML )
// dom -> document object model

( function(glo, doc){
    // procurar elemento pelo ID
    console.log( doc.getElementById( "my-link" ) )

    // procurar elemento pela classe
    console.log( doc.getElementsByClassName( "my-link" ) )

    // procurar elemento pela tag
    console.log( doc.getElementsByTagName( "a" ) )

    // procurar elemento pelo nome
    console.log( doc.getElementsByName( "my-link" ) )

    // para atribuir valores retornados parauma variável colocamos $ antes para falar que ali está um dado do document

    var $output = doc.getElementsByTagName( "a" )
    console.log( $output )

    // utilizando querySelector e querySelectorAll para buscar valore no document
    // pq usar? pois com esse tipo de busca os dados não se alto atualizam, issoe vita problemas futuros

    var $output2 = doc.querySelector( ".my-link"  )
    console.log( $output2 )

})( window, document);
// dinâmicos / estáticos








