// objeto string

// propriedades de um objeto string
// .lenght

    var obj = {
        name: "Maxsuel"
    }

    console.log( obj.name.length )

    // char at -> informa o caractere na posição que eu mandar  
    console.log( obj.name.charAt( 0 ) )

    // concat -> concatena

    console.log( obj.name.concat( " é brabo ") )

    // indexOf

    console.log( obj.name.indexOf( "M", 0 ) )

    // replace

    console.log( obj.name.replace( "M" , "m")) // somente letra por letra

    // slice

    console.log( obj.name.slice( 0, 3 ))

    // splice

    console.log( obj.name.split( "" , 2))

    // substring

    console.log( obj.name.substring( 3 ) )

    // to LOWER case

    console.log( obj.name.toLowerCase() )

    // to uper case

    console.log( obj.name.toUpperCase() )