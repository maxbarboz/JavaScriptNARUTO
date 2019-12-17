// metodo push

var vet = [1, 2, 3, 4, 5, 6, 7];

console.log( vet )

vet.push( { cor: " verde "} ) // push = empurrar -> adiciona um novo valor no array

console.log ( vet )
console.log( vet[7].cor )   // já invoca a cor do objeto
 
vet.push( function soma( x, y){
    return x + y;
})

console.log( vet )

console.log( vet[8](1 , 2) ) // faz a soma conforme mandado na function

// estrutura de repetição for

for (var i2 = 0 ; i2 < vet.length ; i2++) {
    console.log("Posição -> "+ i2)
}