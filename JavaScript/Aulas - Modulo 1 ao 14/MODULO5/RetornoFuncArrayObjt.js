// retorno de funções com arrays e objetos

// funções

// retornar mais de um valor

function myFunction() {
    return [1, 2, 3]; // vários números
}

console.log(myFunction())

var mec = "Maxsuel"

var mec = mec.split("") // split em js? ai eu gostei

console.log(mec)

function splitzada(mec) {
    return mec.split("");
}

console.log(splitzada("Maxsuel"))

// objeto dentro de função

function teste() {
    return {
        dado: 1,
        dado: 2,
        dado: function () {
            return 10;
        }
    }
}

console.log(teste())