// as propriedades devem ter nomes diferentes

( function(){
    "use strict";

    var obj = {
        prop1: 2,
        prop1: 3
    }

    console.log( obj )

    function myFunction(a, a){
        console.log( "é isso" )
    }

    myFunction();
})()