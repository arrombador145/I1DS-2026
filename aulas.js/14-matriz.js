// criando uma matriz
/*
var matriz = [
    [9, 0, 1],
    [7, 1, 2],
    [6, 2, 8],
    [1, 3, 9],
]
console.table(matriz)

// obtendo elemento com base e seus indices

console.log("o numero dessa matriz é: ", matriz[0][1])
console.log("o numero dessa matriz é: ", matriz[3][2])

*/

var metez = [
  [1, 2, 3],
  [4, 5, 7],
  [3, 8, 9],
];
console.table(metez);
console.log(metez[0][0]);
console.log(metez[1][1]);
console.log(metez[2][2]);

console.log("-----------------------------------");
console.log(metez[0][2]);
console.log(metez[1][1]);
console.log(metez[2][0]);

console.log("-----------------------------------");

metez[1][2] = 20;
metez[0][2] = 30;
console.table(metez);

console.log("-----------------------------------");

for (let linha = 0; linha < metez.length; linha++)
  for (let coluna = 0; coluna < metez.length; coluna++)
    console.log("matriz[", linha, ",", coluna, "] =", metez[linha][coluna]);
