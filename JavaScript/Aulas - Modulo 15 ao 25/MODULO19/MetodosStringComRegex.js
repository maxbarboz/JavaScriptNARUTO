// métodos strings com regex
console.log( "Maxsuel".match(/Ma/g) ) // retorna um array

console.log( "Maxsuel".replace(/Max/g , "Brabo") )

console.log( "111.222.333-44".split(/\D/g) )

console.log( "Maxsuel".search(/x/) ) // busca na string, e retorna o index de onde está o caracter