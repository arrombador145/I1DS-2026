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

// pop -> remover um elemento do final do vetor (ultimo elemento)
dinos.pop();
console.table(dinos);
console.log("o vetor tem ", dinos.length, "elementos");

// shift ->  remover um elemento do final do vetor (ultimo elemento)
dinos.shift();
console.table(dinos);
console.log("o vetor tem ", dinos.length, "elementos");

//splice -> remove um elemento a partir de um indice, e também precisa ser informada a quantidade de registro a ser excluído do índice.  -  1

//remove somente o segundo item da lista  -  2
dinos.splice(1, 1);
console.table(dinos);
console.log("o vetor tem ", dinos.length, "elementos");

// adicionar mais elementos ao vetor
dinos.push("pterodátilo");
dinos.push("estegossauro");
dinos.push("argentinossauro");
console.table(dinos);

// Procurar um elemento a partir do nome (descrição)
// indexOf(procurado) -> retorna o indice do elemento no vetor
let procurado = "Estegossauro";
let indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);

// indexOf(procurado) -> retorna -1 caso não encontre o elemento
procurado = "Cristianossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);

// Excluir um elemento com base em seu nome
// 1º localizar o indice do elemento a partir do nome
// 2º excluir o registro com base no indice retornado
procurado = "Estegossauro";
indice = dinos.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);
dinos.splice(indice, 1);
console.table(dinos);

// Alterar o valor de um elemento a partir do Indice
dinos[1] = "Anquilossauro";
console.table(dinos);

//alterar de um elemento a partir do indice
let novalista = dinos.slice(); //cópia completa do vetor dinos
console.table(novalista);

let listaParcial = dinos.slice(1, 3); // Cria uma cópia do vetor dinos a partir do indice onde começa e onde termina a copia
console.table(listaParcial);
