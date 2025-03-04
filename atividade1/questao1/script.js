const numeroSecreto = Math.floor(Math.random() * 20) + 1;

function verificarTentativa() {
    const tentativa = parseInt(document.getElementById("guess").value);
    const dica = document.getElementById("dica");
    const mensagem = document.getElementById("mensagem");

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 20) {
        dica.textContent = "Por favor, insira um número entre 1 e 20.";
        return;
    }

    
    if (tentativa < numeroSecreto) {
        dica.textContent = "O número secreto é maior. Tente novamente!";
    } else if (tentativa > numeroSecreto) {
        dica.textContent = "O número secreto é menor. Tente novamente!";
    } else {
        dica.textContent = "";
        mensagem.textContent = `Parabéns! Você acertou, o número é o: ${numeroSecreto}.`;
        document.querySelector("button").disabled = true; 
    }
}

