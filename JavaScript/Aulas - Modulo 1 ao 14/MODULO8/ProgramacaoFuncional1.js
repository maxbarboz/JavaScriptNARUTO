// programação funcional 

// as funções em js são -> objetos de primeira classe || "cidadões" de primeira classe

// como você usa objetos literais

var car = {
    brand: "Chevrolet",
    model: "Silverado"
}

// você pode criar funções literais

function sum ( x,y ){
    return x + y;
}

// da mesma forma que você cria um objeto literal você cria uma função

var objeto = {}
var func = function () {}

// retornando um objeto em uma função

function returnObj (){
    return {
        name: "Maxsuel",
        lastname: "Storch"
    }
}

// ou 

function returnObj2 (){
    var objeto = {
        name: "Maxsuel",
        lastname: "Storch"
    }
    return objeto;
}

console.log( returnObj() )
console.log( returnObj2() )

// apartir do momento que eu executar a function ela passa a ser um objeto, não literalmente, pois retorna um
console.log( returnObj2().name )