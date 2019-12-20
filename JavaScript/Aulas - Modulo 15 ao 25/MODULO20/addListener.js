( function(doc){

// introdução de eventos
// .addEventListener


var $button = doc.querySelector( "#button" )

// event click

$button.addEventListener( "click" , function( event ){
    event.preventDefault();
    console.log( "Click no botão!")
}, false )

// event submit

$button.addEventListener( "submit" , function( event ){
    event.preventDefault();
    console.log( "Click no botão!")
}, false )

}) (document);