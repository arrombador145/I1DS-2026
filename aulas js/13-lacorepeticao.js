// laço de repetição - FOR (para)

for (let i = 0; i < 1000; i++) {
  console.log("eu vou prestar atenção ás aulas e anotar tudo!");
}

console.log("=========================================================");
//escreva todos os números de 1 a 20
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

console.log("=========================================================");
//escreva todos os números pares de 1 a 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
//=================================================================
console.log("=========================================================");
// outro jeito

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) console.log(i);
}
// % => resto de divisão
// i % 2 == 0 => se o resto da divisão de i por 2 for 0, ele mostra
console.log("=========================================================");
// dado um vetor, calcule e exiba o somatorio de seus elementos
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
