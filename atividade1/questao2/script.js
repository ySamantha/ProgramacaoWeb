function jogar() {
    const opcoes = ["Pedra", "Papel", "Tesoura"];

    let usuarioEscolha = prompt("Escolha: Pedra, Papel ou Tesoura");
    let computadorEscolha = opcoes[Math.floor(Math.random() * 3)];

    console.log(`Você escolheu: ${usuarioEscolha}`);
    console.log(`O computador escolheu: ${computadorEscolha}`);

    if (usuarioEscolha === computadorEscolha) {
        console.log("Empate!");
    } else if (
        (usuarioEscolha === "Pedra" && computadorEscolha === "Tesoura") ||
        (usuarioEscolha === "Papel" && computadorEscolha === "Pedra") ||
        (usuarioEscolha === "Tesoura" && computadorEscolha === "Papel")
    ) {
        console.log("Você venceu!");
    } else {
        console.log("O computador venceu!");
    }
}
