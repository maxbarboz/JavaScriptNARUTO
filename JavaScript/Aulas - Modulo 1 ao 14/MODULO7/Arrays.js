// Array em JavaScript

var objeto = {
    vet : [ 1,2,3], 
    altura : 1.30
}

console.log(objeto.vet)
console.log(objeto.vet.length)

var i = 0;

// laõ de repetição while
while( i < objeto.vet.length ){
    console.log(objeto.vet[i])
    i++;
}

// laço de repetição for
for (var i = 0 ; i < objeto.vet.length ; i++ ){
    console.log(objeto.vet[i])
}