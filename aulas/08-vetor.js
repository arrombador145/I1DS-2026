// criando variáveis do tipo Array (vetor)

var dinos = ["tiranossauro rex", "estegossauro", "brontossauro", "tricerátops"];

// imprimindo os dados em forma de linha
console.log(dinos);

// imprimindo os dados em formas de tabelas
console.table(dinos);

//length -> "tamanho do array (quantidade de elementos)
console.log("o vetor tem ", dinos.length, "elementos");

// imprimir elemento a partir do indice
console.log(dinos[2]);

// push - adiciona um novo elemento no final da fila
dinos.push("anquilossauro");

console.table(dinos);

console.log("o vetor tem ", dinos.length, "elementos");

//unshift -> adiciona um novo elemento no inicio da fila
dinos.unshift("velociraptor");

console.table(dinos);

console.log("o vetor tem ", dinos.length, "elementos");

//obter um elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("2ª posição:", dinos[1]);
console.log("20ª posição (não existe):", dinos[20]);
