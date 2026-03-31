//1º
console.log("meu nome é pulo, minha idade é 11, sou de jau");
console.log("==========================================");

//2º
let num1 = 10;
let num2 = 5;

let resultado = num1 + num2;
console.log("10 + 5 é: ", resultado);

let resu = num1 - num2;
console.log("10 - 5 é: ", resu);

let re = num1 * num2;
console.log("10 * 5 é: ", re);

let sul = num1 / num2;
console.log("10 / 5 é: ", sul);

console.log("============================================");

//3º
let resto = num1 % num2;
console.log("o resto da divisão é: ", resto);
console.log("============================================");

//4º
let altura = 10;
let base = 2;
let tado = base * altura;
console.log("a área do retângulo é: ", tado);

console.log("============================================");

//5º
let altu = 50;
let bes = 10;
let comp = 10;
let tasemideia = altu * bes * comp;
console.log("a área do paralelepípedo é: ", tasemideia);

console.log("============================================");

//6º
let valorproduto = 100;
let valordesconto = 10;
let valorpronto = valorproduto - valordesconto;

console.log("esse produto com desconto vai ficar: ", valorpronto);

console.log("============================================");

//7º
let celcius = 2;
let fare = (2 * 9) / 5 + 32;
console.log("convertendo, 2°C vai virar: ", fare, "Fahrenheit");

console.log("============================================");

//8º
let altura2 = 1.75;
let peso = 60.0;
let imc = peso / (altura2 * altura2);

console.log("o indice de massa corporal dessa pessoa é: ", imc);

console.log("============================================");

//9º
let notadele = 5;
let notadela = 7;
let notadeleo = 8;

let notatotal = 5 + 7 + 8;
console.log("a soma de 5 + 7 + 8 é: ", notatotal);

console.log("============================================");

//10º
let a = 2;
let b = 4;
let c = 6;
let somaa = a * a + b + c;

console.log("o resultado dessa equação é: ", somaa);

console.log("============================================");

//11º ---------------> if
let hora = 1.5;
let minuto = 1.5 * 60;
let segundo = minuto * 60;

console.log("em minutos vira: ", minuto);
console.log("em segundos vira: ", segundo);

console.log("============================================");

//13
let mum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let par = 0;
let impar = 0;

for (let i = 0; i < mum.length; i++) {
  if (mum[i] % 2 == 0) par++;
  else impar++;
}

console.log("tem ", par, "de numeros pares.");
console.log("tem ", impar, "de numeros impares.");
console.log("============================================");

//12
let mul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let posi = 0;
let neg = 0;
for (let i = 0; i < mul.length; i++) {
  if (mul[i] % 1 == 0) posi++;
  else mul++;
}

console.log("tem ", posi, "de numeros posi.");
console.log("tem ", neg, "de numeros neg.");

console.log("============================================");
// 13. múltiplo de 3
let num13 = 9;
if (num13 % 3 === 0) {
    console.log("É um múltiplo de 3");
} else {
    console.log("Não é um múltiplo de 3");
}
console.log("============================================");

// 14 notas do aluno
let nota = 4.5;
if (nota >= 7) {
    console.log("aprovado");
} else if (nota >= 5) {
    console.log("recuperação");
} else {
    console.log("reprovado");
}
console.log("============================================");

// 15
let idadevoto = 7;
if (idadevoto < 16) {
    console.log("Não pode votar");
} else if (idadevoto >= 18 && idadevoto <= 70) {
    console.log("Voto obrigatório");
} else {
    console.log("Voto facultativo (opcional)");
}
console.log("============================================");
//16
let num16 = 20;
if (num16 >= 10 && num16 <= 50) {
    console.log("tá no intervalo");
} else {
    console.log("fora do intervalo");
}
console.log("============================================");
//17
const usuariosalvo = "admin";
const senhasalva = "1234";

let userdigitado = "admin";
let senhadigitada = "1234";

if (userdigitado === usuariosalvo && senhadigitada === senhasalva) {
    console.log("login realizado com sucesso!");
} else {
    console.log("usuário ou senha incorretos.");
}
console.log("============================================");
