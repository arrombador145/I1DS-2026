// Variavel para armazenar o Elemento <p> com id=contador
let contador = document.getElementById("contador");

const adicionar = () => {
  // Variavel para aramazenar o valor atual
  let valorAtual = parseInt(contador.innerHTML);
  // Aumenta o valor Atual em +1
  valorAtual++;
  // Atualizar o Valor do elmento <p> com id=contador
  contador.innerHTML = valorAtual;
};
const diminuir = () => {
  let valorAtual = parseInt(contador.innerHTML);
  valorAtual--;
  contador.innerHTML = valorAtual;
};
const zerar = () => {
  contador.innerHTML = 0;
};
