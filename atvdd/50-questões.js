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
//18
let an = 10, bn = 20;
if (an > bn) {
    console.log(`${an} é o maior`);
} else {
    console.log(`${bn} é o maior`);
}
console.log("============================================");
//19
let x = 15, y = 30, z = 20;
if (x >= y && x >= z) {
    console.log(`${x} é o maior`);
} else if (y >= x && y >= z) {
    console.log(`${y} é o maior`);
} else {
    console.log(`${z} é o maior`);
}
console.log("============================================");
//20
let idade = 35;

if (idade >= 0 && idade <= 12) {
    console.log("criança");
} else if (idade <= 17) {
    console.log("adolescente");
} else if (idade <= 59) {
    console.log("adulto");
} else {
    console.log("idoso");
}
console.log("============================================");
// 21
let dia = 3;
switch (dia) {
    case 1: console.log("domingo"); break;
    case 2: console.log("segunda"); break;
    case 3: console.log("terça"); break;
    default: console.log("dia inválido")
console.log("============================================");
// 22 e 23
let mes = 5;
switch (mes) {
    case 1: case 2: case 3: console.log("1º trimestre"); break;
    case 4: case 5: case 6: console.log("2º trimestre"); break;
    // ... e assim por diante
}
}
console.log("============================================");
//24
let operacao = 1; 
let n1 = 10, n2 = 5;
switch (operacao) {
    case 1: console.log(n1 + n2); break;
    case 2: console.log(n1 - n2); break;
    case 3: console.log(n1 * n2); break;
    case 4: console.log(n1 / n2); break;
}
console.log("============================================");
//25
let oqacho = "A";
switch (oqacho) {
    case "A": console.log("excelente"); break;
    case "B": console.log("bom"); break;
    case "C": console.log("regular"); break;
    case "D": console.log("ruim"); break;
}
console.log("============================================");
// 26
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
console.log("============================================");

// 27
for (let i = 100; i >= 1; i--) {
    console.log(i);
}
console.log("============================================");

// 28
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}
console.log("============================================");

// 29
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) console.log(i);
}
console.log("============================================");

// 30
let somaTotal = 0;
for (let i = 1; i <= 100; i++) {
    somaTotal += i;
}
console.log("soma total:", somatotal);
console.log("============================================");

// 31
let nfatorial = 5; 
let resultado1 = 1;
for (let i = nfatorial; i > 1; i--) {
    resultado1 *= i;
}
console.log(`O fatorial de ${nfatorial} é ${resultado1}`);
console.log("============================================");

let tabuadade = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuadade} x ${i} = ${tabuadade * i}`);
}
console.log("============================================");

// 33.
let contadorpares = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) contadorpares++;
}
console.log(`Existem ${contadorpares} números pares.`);
console.log("============================================");

// 34
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}
console.log("============================================");

// 35
let linhas = 5;
for (let i = 1; i <= linhas; i++) {
    console.log("*".repeat(i));
}