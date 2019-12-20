( function( win , doc ){

    "use strict";

    var counter = 0;
    var $button = doc.querySelector( '[data-js="button"]' );
    var temporizador = 0;

    function timer(){

        console.log("timer", counter++)
        if( counter > 20 )
            return;
        temporizador = setInterval( timer(), 1000 );
    }

    timer();

    $button.addEventListener( "click", function(){
        clearInterval( temporizador );
    }, false)


})( window , document );