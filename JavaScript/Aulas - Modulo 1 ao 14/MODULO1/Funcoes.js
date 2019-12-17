/*Funçoes:

Blocos de código javascript nomeados, e que podem ser invocados usando o operador ()

*/
var x = 0, cont;
console.log(x)

teste()

function teste(){
    x=1000;
    console.log(x)   
}

teste()

/* funções criam escopo */

// variável criada dentro da função só existe dentro da função '-'

// então para retornar valores usaremos return

function acrescentaString(){
    var nome = "Maxsuel Storch"
    return nome;
}

console.log(acrescentaString())

// funções também podem receber parametros

function somatorio(x , y){
    return x+y;
} 

console.log(somatorio(10, 20))

