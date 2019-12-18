// uso de with 
// with encurta um comando
( function(){

    "use strict";
var obj = {
    obj2:{
        obj3:{
            ob3: "prop1",
            ob4: "prop2"
        }
    }
}

with( obj.obj2.obj3 ){
    console.log( ob3, ob4 )
}

})();