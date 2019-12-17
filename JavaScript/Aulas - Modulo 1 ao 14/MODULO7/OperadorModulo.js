// operador de módulo

// apresenta o resto da divisão '-'

var myvar = 100;

if(myvar%2 === 0){
    console.log(myvar + " / 2 = 0")
}

console.log(myvar % 3) // pois 100 / 3 não é exato


function testeImpPar( num ){
    return num % 2 ? " Impar " : " Par "
}

console.log(testeImpPar(100))
console.log(testeImpPar(55))
console.log(testeImpPar(1))
console.log(testeImpPar(1132312))
