/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/
console.log("---------------------------------------");
let nome = "joao";
let banco = "willbank";

console.log("Seu nome é: ", nome, "Banco: ", banco);

let agencia = "026";
console.log("a agencia é ", agencia, "do estado do AC");

let conta = "9040";
console.log("o número de sua conta é ", conta, "use com responsabilidade!");

let saldo = 1000;
saldo -= 900;
console.log("seu saldo disponivel é", saldo, "use com resposabilidade");
console.log("você enviou R$", saldo);
saldo +=2;
console.log(" Pix de 2 Reais Recebido, Seu saldo:", saldo);
saldo +=30
console.log("voce recebeu um pix de R$ 30 , seu saldo é ", saldo ) 
saldo +=1042
console.log("voce recebeu um pix de R$ 1042 , seu saldo é ", saldo ) 
saldo -=1000
console.log("voce fez um pix de R$ 1000 , seu saldo é ", saldo ) 
