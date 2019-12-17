// escopo de funções em JS

// função dentro de função é permitido em JS, mas como fica o escopo dessa função?

function myFunction (){
    function sum(){
        return 1 + 2;
    }
    return sum();
}

console.log( myFunction() );
// console.log( sum() ); -> da erro pois sum foi criado dentro de uma function, então só existe lá

// variáveis pertencentes dentro de uma function podem ser utilizadas sem ser passadas como parâmetros, exemplo:

function functionEx(){
    var number1 = 10;
    var number2 = 2;

    function div(){
        return number1 / number2;
    }

    return div();
}

console.log( functionEx() );

// exemplo de execução

function exemplo(){
    function menos(){
        return x - y;
    }
    return menos();
    // erro na execução pois o return starta a function antes da criação das variáveis
    var x = 1;
    var y = 2;
}

consolelog ( exemplo() );