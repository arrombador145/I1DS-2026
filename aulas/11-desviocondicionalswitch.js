// switch case -> estrutura de decisão usada quando queremos comparar o valor de uma variável com vários possiveis resultados
// REGRA DO PROF CASTELLO -> se tiver mais que 3 comparadores, faça um switch case

//exemplo 01 - menu
// neste exemplo a variável menuselecionado guardará o nome de uma opção de menu
// o switch verifica qual foi a opção escolhida e exibe uma mensagem correspondente

let menuselecionado = "nossas redes sociais";
switch (menuselecionado) {
  case "home":
    console.log("você clicou no link 'home'");
    break;
  case "quem somos":
    console.log("voc~e clicou no link 'quem somos'");
    break;
  case "contato":
    console.log("voce clicou no link 'contato'");
    break;

  default:
    console.log("opção incorreta, selecione uma opção no menu");
    break;
    case "pague um café":
        console.log("o café é $3,50, faça o pix para 98888888 (favor mandar comprovante)")
        break
        case "nossas redes sociais":
        console.log("clique aqui para ver nossas redes")
}
//--------------------------------------------------------------------------

console.log("----------------------------------------------------------------");
//-------------------------------------------------------------------------

const pi = 3.1415683

console.log(pi)
console.log(pi.toFixed(2)) // coloca números com 2 casas decimais somente