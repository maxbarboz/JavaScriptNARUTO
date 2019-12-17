// loops em JS

// outros tipos de laços em js

var x = 0;

do{
    console.log( x++ )
}while ( x <= 10 )

/// loop for in <--- UaU


var car = {
    cor: "red",
    marca: "vw",
    modelo: "gol",
    ano: "2019"
}

console.log( car )

// for in serve para percorrer valores dentro de um objeto

for ( var prop in car ){
    console.log( prop )  // retorna os "atributos" de um objeto
}

// teste de atributo dentro de um objeto com in

console.log( "cor" in car ) // retornar true ou false