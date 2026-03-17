/*
introdução a funções em JavaScript
função -> uma função em javascript é um bloco de código reutilizavel quer executa uma tarefa quando é chamado

*/
//criar uma função que soma dois valores

function somar(valor1, valor2) {
  return valor1 + valor2;
}

console.log("5 + 3 =", somar(5, 3));
console.log("15 + 32 =", somar(15, 32));

let v2 = 10;
let v1 = 23;

console.log("a soma de v1 + v2 =", somar(v1, v2));

// criar uma função que escreve bom dia

function bomdia() {
  console.log("olá bom dia");
}

bomdia();
bomdia();
bomdia();

// função para se apresentar a uma pessoa

function apresentarpessoa(nome, idade, cidade) {
  console.log(
    "apresento a vocês:",
    nome,
    "que tem",
    idade,
    "anos",
    " e é de",
    cidade,
    ".",
  );
}
apresentarpessoa("José", 32, "brotas");
apresentarpessoa("judas", 30, "jaí");
apresentarpessoa("zuleiko", 300, "rio ganges");

// criar uma função que calcula e retorna o desconto em uma venda
function desconto(valorvenda, percentualdesconto) {
  let valordesconto = valorvenda * (percentualdesconto / 100);
  return valordesconto;
}

let totalqpedido = 530.0;
let totaldesconto = desconto(totalqpedido, 10);
let valorfinal = totalqpedido - totaldesconto;

console.log("------------------------------------------");
console.log("Total do Pedido:", totalqpedido);
console.log("Total do Desconto:", totaldesconto);
console.log("Valor Final do Pedido:", valorfinal);
console.log("------------------------------------------");
