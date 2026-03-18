// desvio condicional - IF - ELSE

/*condições simples com IF
sintaxe: if ( condição ){
    codigo a ser executado, se verdadeiro.
}
*/

let anonascimento = 2003;

if (anonascimento > 2003) {
}
console.log("a pessoa nasceu depois de 2003");

console.log("----------------------------------------------------------------");

if (anonascimento < 2003) {
}
console.log("a pessoa nasceu antes de 2003");

console.log("----------------------------------------------------------------");
if (anonascimento == 2003) {
}
console.log("a pessoa nasceu em 2003");
console.log("----------------------------------------------------------------");

if (anonascimento < 2000) {
  console.log("a pessoa nasceu depois de 2000");
} else {
  console.log("a pessoa nasceu antes de 2000");
}
console.log("----------------------------------------------------------------");

// condicional composta com if

const login = "admin";
const senha = "12345";

let loginuser = "jose";
let senhauser = "1234";

if (loginuser == login && senhauser == senha) {
  console.log("login realizado com sucesso");
} else {
  console.log("acesso negado");
}

console.log("----------------------------------------------------------------");
// desvios aninhados - if - else - if - else...

let semaforo = "azul";
if(semaforo == "vermelho"){
console.log("pare")
}else if(semaforo == "amarelo"){
console.log("atenção")
}else if(semaforo == "verde"){
    console.log("pode ir")
} else {
    console.log("opção incorreta")
}