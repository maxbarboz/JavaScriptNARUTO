// set time out

// .setTimeOut -> ajuda a cria eventos assincronos
//    ||       -> será usando como temporizador

( function(){

    "use strict";

    console.log( "inicio")

    setTimeout( function(){
        console.log( "dale")
    }, 1000)

    var cont = 0
    setInterval( function(){ // joga varias vezes esse
        console.log( cont++)
    }, 1)

    console.log( "FIm" )
})();