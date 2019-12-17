// Escopo de Variáveis 

// global < -- > local 

// escopo é o local aonde se declara a variável

// function cria um escopo local 

var myvar = 2 // escopo global

var myFunction = function() {
    console.log(myvar)
}

var myFunc = function () {
    var myvar2 = 2; // escopo local
}

myFunc()

//console.log(myvar2)  ---------------  erro pois não acessa a variável

// como em java, a variável é destruida após a finalização da function

// IMPORTANTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE

// utilizar sempre variável do tipo var

// declarar a variável, mesmo dentro da function, sem var, declara que a mesma está em escopo global

var myFunction2 = function () {
    myvar3 = 3
}

myFunction2()
console.log(myvar3) // consegue acessar 