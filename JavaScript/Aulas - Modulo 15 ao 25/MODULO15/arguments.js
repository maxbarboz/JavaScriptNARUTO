( function() {

	function myFunction(arg1, arg2){ // nunca nomeie parametros como arguments 
		// retorna como se fosse um array os parametros/argumentos passados
		return arguments;
	}

	console.log( myFunction( 1, 2 ) )
	

	// também consigo acessar um dos argumentos, com a mesma lógica de um array

	function myFunction2(arg1, arg2){
		return arguments[0];
	}

	console.log( myFunction2( 2, 3 ))
}) ();