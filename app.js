console.log("Rodando o sistema de gerenciamento de jogos")
console.log("aplicação está se conectando ao banco de dados")

// mais um console log de teste:
console.log("O Paulo fez esse commit sem você ver na aula!")
console.log("Enviando para o GitHub")

// teste de botão e caixa de texto 
    let segredo = 5;
    let entrada = document.querySelector("input");

function verifica() {
    if(entrada.value == segredo) {
        alert("Você ACERTOU!!!");
    } else {
        alert("Você ERROU!!!");
    }
}

    let botao = document.querySelector("button");
    botao.onclick = verifica;

alert("Consegue adivinhar em qual númemro estou pensando?");