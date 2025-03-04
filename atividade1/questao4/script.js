function desenharTriangulo() {
    const linhas = document.getElementById("linhas").value;
    const trianguloDiv = document.getElementById("triangulo");

    if (linhas <= 0 || isNaN(linhas)) {
        alert("Por favor, insira um número válido de linhas.");
        return;
    }

    let triangulo = '';
    
    for (let i = 1; i <= linhas; i++) {
        triangulo += '*'.repeat(i) + '\n';
    }

    trianguloDiv.textContent = triangulo;
}
