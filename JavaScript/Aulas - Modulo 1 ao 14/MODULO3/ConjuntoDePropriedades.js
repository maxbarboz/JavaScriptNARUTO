// conjunto de propriedades

var pessoa = { nome: "Maxsuel", idade: 19 }

// adicionando um novo atributo

pessoa.cor = "Moreno"

console.log(pessoa)

// criando método em java script

pessoa.andar = function(){
    return "Pessoa Andando"
}

console.log(pessoa.andar())

pessoa.aniversario = function(){
    return pessoa.idade ++;
}

console.log(pessoa.aniversario())
console.log(pessoa.aniversario())
console.log(pessoa.aniversario())

pessoa.sobrenome = "Barboza"

console.log(pessoa)

