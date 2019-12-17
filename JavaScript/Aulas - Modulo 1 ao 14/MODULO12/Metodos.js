// metodos de  objetos

var obj = {
    x: 2,
    y: 10
}

var otherObj = Object.create( obj )

console.log( Object.keys(obj) ) // transforma tudo em um array
console.log( obj.isPrototypeOf( otherObj )) // testa se o obj é prototype de um segundo objeto

// JSON = JAVA SCRIPT OBJECT NOTATION ?
var objJSON = JSON.stringify( obj )
console.log( objJSON ) // transforma o objeto em uma string

// TRANSformar novamente em objeto
objJSON = JSON.parse( objJSON )
console.log( objJSON ) // transforma novamente em objeto 