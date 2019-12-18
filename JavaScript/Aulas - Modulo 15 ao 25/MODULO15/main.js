( function(){

var object = {
	propriedade: 1,
	init: function init(){
		// faz referência ao objeto
		return  this.propriedade;
	}
}

console.log( object.init() )

// quando você imprime uma variável this fora de um objeto, ela aponta para um escopo global, oque retorna window
	function md(){
		return this;
	}

	console.log( md() )

// criando construtor em JS

	function MyConstructor(){
		this.prop1 = "Maxsuel";
		this.prop2 = "Storch";
	}

	var vari = new MyConstructor();

	console.log ( vari )

	// quando voce usa this sem um var, você coloca essa variável em escopo global

	prop1 = "TESTE";
	console.log( window.prop1 )

	// SE VOCÊ CHAMA a função sem usar new você acaba usando this para pendurar a variável em escopo global

})();


