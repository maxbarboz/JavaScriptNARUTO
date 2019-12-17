/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function (x) {
    return !!x;
}

isTruthy(3)

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(null)
isTruthy(0)
isTruthy(-1)
isTruthy(NaN)
isTruthy(undefined)
isTruthy("")
isTruthy(false)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1)
isTruthy("Maxsuel")
isTruthy("isso ae")
isTruthy(139103)
isTruthy(1.90)
isTruthy(true)
isTruthy("Basis")
isTruthy(8)
isTruthy(09)
isTruthy(0.1)

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: "Hyundai",
    modelo: "HB-20",
    placa: "XYZ - 2029",
    ano: 2019,
    cor: "Black",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function (cor) {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function () {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function () {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function () {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function () {
    return "Esse carro é um " + carro.obterMarca() + " " + carro.obterModelo
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adcionarPessoa = function ( numPessoas ) {

    var testeQto = carro.quantidadePessoas+numPessoas

if(numPessoas > 0){

        if(carro.quantidadePessoas  === carro.assentos){
            return "O carro já está lotado";
        }else if (carro.assentos - carro.quantidadePessoas === 1){
            return "Só cabem mais uma pessoa!";
        }else if(testeQto > carro.assentos){
            return "Só cabem mais " + ( carro.assentos - carro.quantidadePessoas ) + " pessoas!";
        }
    
        carro.quantidadePessoas = testeQto
}
    
    return "Já temos " + carro.quantidadePessoas  + " pessoas no carro!"

}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor()) // preto

// Mude a cor do carro para vermelho.

carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Mude a cor do carro para verde musgo.
carro.mudarCor("VerdeMusgo")

// E agora, qual a cor do carro?
console.log(carro.obterCor())

// Qual a marca e modelo do carro?
console.log(carro.obterMarca())

// Adicione 2 pessoas no carro.
console.log(carro.adcionarPessoa(2))

// Adicione mais 4 pessoas no carro.
console.log(carro.adcionarPessoa(4))

// Faça o carro encher.
console.log(carro.adcionarPessoa(5))

// Tire 4 pessoas do carro.
console.log(carro.adcionarPessoa(-4))

// Adicione 10 pessoas no carro.
console.log(carro.adcionarPessoa(10))

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas+ " pessoas!")