// saltos em JS -> 

// saltos sao instruções que você usa para pular partes da sua aplicação

// tipos de saltos

// return
// break
// continue

for (var i = 10; i < 100; i++){
    console.log( i )
    if( i === 40 ){
        break; // para a execução
    }
}

for (var i = 10; i < 100; i++){
    if( i === 40 ){
        continue; // pula essa execução e vai para a próxima valida
    }else{
        console.log( i )
    }
}