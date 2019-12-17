// proramação funcional parte 3

// como passar objetos por parâmetros

function getName ( objeto ){
    return objeto.name;
}

var pessoa = {
    name: "Maxsuel",
    lastName: "Storch"
}

console.log( getName ( pessoa ) )

// passando functions como parâmetros

function func (){
    return "Essa função é braba!"
}

function returnFunc ( func ){
    return func();
}

console.log( returnFunc ( func ) )

// ou também posso criar a função direto no parâmetro

function returnFunc ( func ){
    return func();
}

console.log( returnFunc ( function func2 (){
    return "Essa outra função também é braba!"
}) )