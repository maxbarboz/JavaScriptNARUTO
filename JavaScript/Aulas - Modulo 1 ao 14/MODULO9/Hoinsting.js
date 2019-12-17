// hoinsting JS

// movendo pra cima ^^^

/*
function myFunction(){
    var number1 = 1;
    var number2 = 2;

    // erro na execução, pois um hoinsting não funciona em variável só em funções literais, com isso ele ignora as execuções abaixo
    return sum();

    var sum = function sum(){
        return number1 + number2;
    }
}
*/

// hoinsting feitos com variáveis funcionam da seguinte forma
// o js consegue análisar que a variável existe, porém antes da atribuição ela está como undefined

function myFunction2 (){
    console.log( "Esse é o valor da variável: " + number1)
    var number1 = 10;
    console.log( "Esse é o valor da variável: " + number1)
}

myFunction2()