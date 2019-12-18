
( function(){

    "use strict";

    var myVar = 10;
    var obj = {
        prop1: "prop1",
        prop2: "prop2",
        prop3: "prop3"
    }

    console.log( delete obj.prop1 )
    console.log( delete myVar ) // não consegue excluir variável
    
}) ();