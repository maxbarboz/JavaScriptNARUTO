// Immediately-Invoked function expression
// expressão de função executada imediatamente

function sum(){
    return 1 + 2;
}

console.log( sum() )

var sum2 = function(){
    return 3 + 2;
}

console.log( sum2() )

var sum3 = function otherSum(){
    return 5 + 8;
}

console.log( sum3() )

// atribuindo function como atributo de um objeto

var obj = {
    prop: function(){
    return "É isso ae";
    }
}

console.log( obj.prop() )

// função que é executada imediatamente/automaticamente

(function () {
    console.log( "Testando a oiaiiaii");
}) ();
