// tipos de dados primitivos ou de objeto

/*
- number
- string
- boolean
- null e undefined
*/

// objeto -> conjunto de propriedades

var pessoa /*objeto*/ = [
    {   altura: 1.76 ,
        peso: 60 ,
        nacionalidade: "Brasileiro"
    }, 

    {   altura: 1.60 ,
        peso: 130 ,
        nacionalidade: "Espanhol"
    }
]

console.log(pessoa[0].altura)
console.log(pessoa[1].peso)
console.log(pessoa[1].nacionalidade)

// outra forma de se referenciar uma função

var myvar = function(){
    return "Testando sempre";
}

console.log(myvar())