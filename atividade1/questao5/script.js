function calcularSoma() {
    const termos = document.getElementById("termos").value;
    const serieDiv = document.getElementById("serie");
    const resultadoDiv = document.getElementById("resultado");

    if (termos <= 0 || isNaN(termos)) {
        alert("Por favor, insira um número válido de termos.");
        return;
    }

    let serie = '';
    let soma = 0;
    let numeroAtual = 1;

    for (let i = 1; i <= termos; i++) {
        serie += numeroAtual;
        soma += numeroAtual;
        if (i < termos) {
            serie += " + ";  
        }
        numeroAtual = numeroAtual * 10 + 1;  
    }

    serieDiv.textContent = serie;
    resultadoDiv.textContent = "A soma é: " + soma;
}
