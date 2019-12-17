// mutáveis
// manipulados por referência

var obj = {
    prop1: "prop1",
    prop2: "prop2"
}

var obj2 = {
    prop1: "prop1",
    prop2: "prop2"
}

console.log( obj )
console.log( obj2 )
// mudar atributo de um objeto

obj.prop1 = " to de hack "
console.log( obj )

// deletando uma propriedade do objeto

delete obj.prop1;
console.log( obj )

// adicionando obj

obj.prop1 = "prop1"
console.log( obj )

// quando se faz um copy e um obj você faz uma referência na memória
// exemplo:

var objCopy = obj

console.log( objCopy )
console.log( obj )

objCopy.prop1 = "que isso catchoro"

console.log( objCopy )
console.log( obj )


// CRIAÇÃO DE OBJETOS

// literais;
// como construtor (new);
// com Object.create()

var obj = { }
var obj2 = new Object()
var obj3 = Object.create()

// propriedade -> object.prototype -> protótipo