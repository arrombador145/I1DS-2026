/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/

var fruts = ["banana", "maçã", "pera", "uva", "morango"];
console.table(fruts);
console.log("agora, a tabela tem", fruts);

fruts.push("tangerina");
console.table(fruts);
console.log("agora, a tabela tem", fruts, "elementos");

fruts.unshift("goiaba");
console.table(fruts);
console.log("agora, a tabela tem", fruts, "elementos");

let procurado = "uva";
let indice = fruts.indexOf(procurado);
console.log("A ", procurado, "está no indice:", indice);

console.log("a", procurado, "está no indice", indice);
fruts.splice(indice, 1);
console.table(fruts);

let frutsnovas = fruts.slice(2,5);
console.table(frutsnovas);