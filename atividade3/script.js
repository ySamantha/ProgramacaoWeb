var item = document.getElementById("item");
var botaoAdd = document.getElementById("botaoAdd");
var tabela = document.getElementById("paragrafos");
var select = document.getElementById("selectItem");

function adicionarItem(event){
    if((event.key === "Enter" || event.type === "click") && item.value.trim() !== ""){
        let texto = item.value.trim();

        // Cria nova linha na tabela
        let novaLinha = document.createElement("tr");
        novaLinha.setAttribute("data-item", texto);
        let coluna = document.createElement("td");
        coluna.textContent = texto;
        novaLinha.appendChild(coluna);
        tabela.appendChild(novaLinha);

        // Adiciona item ao select
        let option = document.createElement("option");
        option.value = texto;
        option.text = texto;
        select.appendChild(option);

        item.value = "";
    }
}

botaoAdd.addEventListener("click", adicionarItem);
item.addEventListener("keydown", adicionarItem);

var botaoMarcar = document.getElementById("botaoMarcar");
var botaoDesmarcar = document.getElementById("botaoDesmarcar");
var botaoRemover = document.getElementById("botaoRemover");

botaoMarcar.addEventListener("click", function () {
    let valorSelecionado = select.value;
    if (!valorSelecionado) return;

    let linhas = tabela.getElementsByTagName("tr");
    for (let linha of linhas) {
        if (linha.getAttribute("data-item") === valorSelecionado) {
            linha.style.backgroundColor = "yellow";
        }
    }
});

botaoDesmarcar.addEventListener("click", function () {
    let valorSelecionado = select.value;
    if (!valorSelecionado) return;

    let linhas = tabela.getElementsByTagName("tr");
    for (let linha of linhas) {
        if (linha.getAttribute("data-item") === valorSelecionado) {
            if (linha.style.backgroundColor !== "yellow") {
                alert("O item já está desmarcado!");
            } else {
                linha.style.backgroundColor = "";
            }
        }
    }
});

botaoRemover.addEventListener("click", function () {
    let valorSelecionado = select.value;
    if (!valorSelecionado) return;

    let linhas = tabela.getElementsByTagName("tr");
    for (let i = 0; i < linhas.length; i++) {
        if (linhas[i].getAttribute("data-item") === valorSelecionado) {
            tabela.removeChild(linhas[i]);
            break;
        }
    }

    // Remover do select
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === valorSelecionado) {
            select.removeChild(select.options[i]);
            break;
        }
    }
});
