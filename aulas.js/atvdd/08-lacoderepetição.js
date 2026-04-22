// dando um vetor, calcule e exiba a quantdade de pares e de impares

let numero = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let par = 0;
let impar = 0;
/*
for (let numero = 0; numero <= 14; numero += 2) {
   console.log(numero) 
    
}

function soma(numero){
    
}
*/

//correção

for (let i = 0; i < numero.length; i++) {
  if (numero[i] % 2 == 0) par++;
  else impar++;
}

console.log("quantia de pares: ", par);
console.log("quantia de impares: ", impar);

console.log("============================================================");

//dado um vetor, multiplique todos os seus números por 3

console.table(numero);

for (let i = 0; i < numero.length; i++) {
  numero[i] *= 3;
}

console.table(numero);
console.log("============================================================");

let matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
console.table(matriz);
