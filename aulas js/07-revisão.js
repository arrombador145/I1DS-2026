//Comentário em linha

/*
  Comentário de varias linhas
  Bloco de código
*/

//Imprimir informações na tela
console.log("imprime informações na telas");

/*
    Declaração de variáveis
    Sintaxe: let tipo-variavel = valor-variavel
    Exemplo: let idade = 16
 */
/*
    Tipos dados primários:
    Numeros inteiros (int) = 10
    Numeros decimais (double) = 8.53
    Caracteres Alfanumeros (string) = "Maria Eduarda"
    Numeros Booleanos (bool) = false
 */
let idade = 16;
let salario = 25864.57;
let ehProfessor = false;
let nome = "Maria Eduarda";

console.log("Nome: ", nome, "Idade: ", idade, "Salário: ", salario);

/*
    Operadores Matematicos
    + -> Adição
    - -> Subtração
    * -> Multiplicação
    / -> Divisão
    % -> Resto da Divisão
 */

export let num1 = 10;
export let num2 = 2;

export let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let restoDivisao = num1 % num2;

console.log("Somando", num1, "+", num2, "=", soma);
console.log("O resto da divisao do", num1, "por", num2, "=", restoDivisao);

/*
    Operadores de Comparação
    == -> Comparação de Igualdade
    != -> Diferente
    > ->Maior que
    < -> Menor que
    >= -> Maior ou Igual
    <= -> Menor ou Igual

    Retorna 'true' ou 'false' | Verdadeiro ou falso
*/

console.log("O Numero 1 é igual ao numero 2?", num1 == num2);
console.log("O Numero 1 é maior ou igual o numero 2?", num1 >= num2);
console.log("O numero 1 menor que o numero 2?", num1 < num2);

/*
    Operadores Lógicos

    && (AND "E") -> Retorna verdadeiro se todas as clausulas foram verdadeiras
    || (OR "Ou") -> Retorna verdadeiro se ao uma das clasulas foram verdadeiras
    ! (NOT "Negação") -> Operador de Negação (Invente o valor logico)
 */

let sexo = "Feminino";
let idadeAluno = 16;

console.log(
  "É sexo Masculino ou tem 17 ou mais anos de idade?",
  sexo == "Masculino" || idadeAluno >= 17,
);
console.log(
  "É sexo Masculino ou tem 17 ou mais anos de idade?",
  sexo == "Masculino" && idadeAluno >= 17,
);
console.log(
  "É sexo Masculino ou tem 17 ou mais anos de idade?",
  !(sexo == "Masculino" && idadeAluno >= 17),
);

//Conectando strings
let n1 = "20";
let n2 = "10";

console.log(n1 + n2);
console.log("20" + n2);

var primeiroNome = "Jonathan";
var sobreNome = " Nogueira";

console.log(primeiroNome + sobreNome);
