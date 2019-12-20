// array like como arrays

( function(){

    "use strict";

    function myFunction(){
      
        Array.prototype.forEach.call( arguments, function( item ){
            console.log( item );
        });
        
    }

    

    myFunction(1, 2, 3 );
}) ();

// array like -> parece array, pode ser usado na forma de array porém não é array 