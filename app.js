console.log("Rodando o sistema de gerenciamento de jogos")
console.log("aplicação está se conectando ao banco de dados")

// mais um console log de teste:
console.log("O Paulo fez esse commit sem você ver na aula!")
console.log("Enviando para o GitHub")

// teste de botão e caixa de texto 
    function sorteia () {
        return Math.round(Math.random() * 10);
    }
    function sorteiaNumeros(quantidade) {

        var segredos = [];

        var numero = 1;

        while (numero <= quantidade) {

            var numeroAleatorio = sorteia();

            if(numeroAleatorio !== 0) {
                var achou = false;

                for (var posicao = 0; posicao < segredos.length; posicao++) {
                    if(segredos[posicao] == numeroAleatorio) {
                        achou = true;
                        break;
                    }
                }

                if(achou == false) {
                    segredos.push(numeroAleatorio);
                    numero++;
                }
            }
        }

        return segredos;

    }

    var segredos = sorteiaNumeros(3);

    var entrada = document.querySelector("input");
    entrada.focus();

    function verifica() {

		var achou = false;

		for(var posicao = 0; posicao < segredos.length; posicao++) {

			if(entrada.value == segredos [posicao] ) {

				alert("Você ACERTOU!!!");
				achou = true;
				break;
			} 

		}if (achou == false) {

			alert("Você ERROU!!!");
		}

			entrada.value = "";
			entrada.focus();
	}

	var botao = document.querySelector("button");

	botao.onclick = verifica;

    console.log() /*serve para verificar as respostas*/
	console.log(segredos);
// teste 
    /*let segredo = 5;
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

alert("Consegue adivinhar em qual númemro estou pensando?");*/
