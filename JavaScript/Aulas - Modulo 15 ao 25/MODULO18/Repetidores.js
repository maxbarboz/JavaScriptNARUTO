// NEGAÇÃO

/*

[^abc] -> ^ = negação (se le: deve ser feito o match com todos os itens menos abc
\W -> w uppercase -> faz o contrário, casa com qulquer carctere menos os alfanuméricos
\D -> d uppercase -> faz o contrário, pega não digitos, que não seja números
\S -> s uppercase -> faz o contrário, qualquer caractere menos os caracteres de espaço em branco
*/


// REPETIDORES

/*
intervalo -> {n,m}  exemplo -> \d{2,4} ( no mínimo duas vezes e no máximo quatro vezes )
intervalo aberto -> {n, } ->    exemplo -> \d{2, } ( repete o valor antetior n vezes)
intervalo exatamente -> {n} ->  exemplo -> \d{4} ( anterior exatamente n vezes)
opcional -> ?  ->   exemplo \d\d? ( zero ou uma ocorrencia do item anterior )
mais -> +  -> exemplo   \s+ ( uma ou mais ocorrências do item anteriro )
"vezes" -> *  -> exemplo \w* ( qualquer caracter próximo )
*/

// OBS: \ TIRA O EFEITO DA /

// EXEMPLOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS ----------------------------------------------------------

