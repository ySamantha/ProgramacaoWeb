function mostrarTabuada() {
    const numero = document.getElementById("numero").value;
    const tabela = document.getElementById("tabuadaTabela").getElementsByTagName("tbody")[0];

    tabela.innerHTML = '';

    if (numero === '' || isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const row = tabela.insertRow();  
        const cell1 = row.insertCell(0); 
        const cell2 = row.insertCell(1);

        cell1.textContent = `${numero} x ${i}`;
        cell2.textContent = resultado;
    }
}

