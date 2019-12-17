// criação de objetos

var obj = {
    x: 1,
    y: 2
}

var obj2 = Object.create( obj ); // herdou valores do obj1

obj2.prototype;

obj = Object.create( {} )
Object.prototype

// uso de toString, que vem da função prototype

console.log( obj.toString( ) )

// herança de OBJETOS EM JSSSSSS

var objTeste = {
    x: 10,
    y: 4
}

var objTesteCopy = Object.create( objTeste );

console.log( objTesteCopy ) // mostra como vazio pq dele mesmo nenhum valor foi criado

console.log( objTesteCopy.x ) // consegue acessar valor do outro objeto por herança

// como saber se a propriedade é ou não daquele objeto

console.log( objTeste.hasOwnProperty( "x" ) )
console.log( objTesteCopy.hasOwnProperty( "x" ) )

// FAZENDO TESTE COM VALORES DE UM OBJETO

objTesteCopy.j = 1;

for ( var prop in objTesteCopy){
    if( objTesteCopy.hasOwnProperty( prop ) ){
        console.log( "Pertence a ele " + prop )
    }else{
        console.log( "Não pertence a ele " + prop)
    }
}