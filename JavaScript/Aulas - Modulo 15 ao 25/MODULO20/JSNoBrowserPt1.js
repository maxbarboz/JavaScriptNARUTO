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
