// propriedades de funções

// .name -> retorna o nome da function
// .lenght -> retorna a quantidade de parametros de uma função
// .toString() -> mostra a função literal da função
// .call -> chama a função
     // com o método call podemos passar qual é o this dessa função .call( this, args, args, agrs ) -> return this daquele objeto
// 

( function(){
     "use strict";
     
     function myFunction(a, b, c, d){
        console.log( this.lastName, a, b, c, d )
     }

     var obj = {
         lastName: "Maxsuel"
     }

     var obj2 = {
         lastName: "Storch"
     }

     myFunction.call(obj, "a", "b", "c", "d");

}) ();

// metodo .aplly( this, [arg1, arg2, ..., arg3]) -> invoca a função

( function(){
    "use strict";
    
    function myFunction(obj, a, b, c){
       console.log( this.name, a, b, c)
    }
    var obj = {
        name: "Maxsuel"
    }
   var arr = [1, 2, 3]

    myFunction.apply(obj, [0, 1, 2, 3]);

}) ();