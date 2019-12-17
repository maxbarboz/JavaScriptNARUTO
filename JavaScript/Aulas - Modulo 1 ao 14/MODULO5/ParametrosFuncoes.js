// Parametros de Funções

var arr = [1, 2, 3]

function myFunction(arr) {
    return arr;
}

console.log(myFunction(arr))

function returnVet(arr) {
    return arr[1];
}

console.log(returnVet(arr))

var pessoa = {
    nome: "Maxsuel",
    idade: 19,
    sexo: "Masculino"
}

function returnObj(pessoa) {
    return pessoa.nome;
}

function returnLocalizado(pessoa){
    return pessoa;
}
console.log(returnObj(pessoa))

console.log(returnLocalizado(pessoa).idade)