// truthy e falsy

// truthy -> todo aquele valor que é representado por true
// falsy -> todo aquele valor que é representado por false

var name = 1

    console.log(1==="b")


// valores FALSY
/*
UNDEFINED
0
-0
NaN
null
string vazia
false
*/

if( NaN ){
    console.log("True")
}else{
    console.log("False")
}

// valores TRUTHY
/*
TODOS OS OUTROS VALORES
:D
*/

// descobrir a representação de um valor, em boolean, usando double ! -> !!

console.log(!!true)
console.log(!!6)
console.log(!!0)
console.log(!!undefined)