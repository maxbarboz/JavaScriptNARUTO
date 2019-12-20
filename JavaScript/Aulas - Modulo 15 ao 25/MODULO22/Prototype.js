// prototype = protótipo dos objetos

// como usar isso em funções? ->

( function(){
    "use strict";

    function MyFunction( name, lastName ){
        this.name = name;
        this.lastName = lastName;
    }

    MyFunction.prototype.fullName = function(){
        return this.name + " " + this.lastName;
    }

    var maxsuel = new MyFunction( "Maxsuel", "Storch");

    console.log( maxsuel.fullName() )
}) ();

// prototype será usado para estender nossos objetos
// prototype pode ser sobrescrito
// variáveis do objeto são lidas antes do que a do prototype