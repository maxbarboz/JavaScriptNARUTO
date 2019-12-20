// métodos de formulários

( function(glo, doc){

    "use strict";

    var $inputUserName = doc.querySelector( "#username" )
   
    console.log( $inputUserName.value ); // setter e getter

    $inputUserName.value = "Maxsuel" // setter
    console.log( $inputUserName.value ); // getter

})( window, document);
