/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/
/*

let idade = 70
let resultado = (idade >= 18) ? "pode votar obrigatoriamente" : "não pode votar, a partir de 16 anos é opcional"
console.log("se sua idade for", idade, "você", resultado)

*/

function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "Não pode Votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "Pode votar, e é obrigatório!";
  } else {
    frase = "Pode votar, mas é opcional!";
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 25;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 12;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 57;
console.log("Idade:", idade, "-", podeVotar(idade));

console.log("-------------------------------------------------------------------------") 

/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/
// -------------------------------------------------------------------------

// errado (arrumado)


function notadele(nota){
    let coment 
    if (nota < 5){
       coment = "está reprovado"
    }else if (nota >= 5  <= 7){
        coment = "está de recuperação"
    }else{ 
        coment = "está aprovado"
    }
    
}
let minnota = 7.5;
console.log("nota:", minnota, "-", notadele ( minnota));
 minnota = 3;
console.log("nota:", minnota, "-", notadele ( minnota));
 minnota = 4.5;
console.log("nota:", minnota, "-", notadele ( minnota));


//----------------------------------------------------------------------

// correto

function verificarsituacao(nota){

if (nota < 5){
    return "reprovado"
} else if (nota < 7){
    return "recuperação"
} else {
    return "aprovado"
}
}
console.log(verificarsituacao(5))
console.log(verificarsituacao(7))

console.log("--------------------------------------------------------------------")

// parte 2 - solução + parte extra
// {} -> grupo de código

function situacaofinal(n1,n2,n3,n4){
let media = (n1 + n2 + n3 + n4) / 4

if (media < 5){
    return "reprovado"
} else if (media < 7){
    return "recuperação"
} else {
    return "aprovado"
}
}
console.log(situacaofinal(5, 5, 5, 5))
console.log(situacaofinal(7, 7, 7, 7))
console.log(situacaofinal(8, 8, 8, 8))
console.log(situacaofinal(6, 6, 6, 8))

function final(n1,n2,n3,n4){
    let media = (n1 + n2 + n3 + n4) / 4
    let situaçao

    if (media < 5) situacao = "aprovado"
    else if (media < 7) situacao = "recuperação"
    else situacao = "aprovado"

    return "media: " + "- situação: " + situacao
}

console.log(final(8, 7, 6, 5))