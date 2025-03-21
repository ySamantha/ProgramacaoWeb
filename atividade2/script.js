//declarando os botões
var botaoIncr = document.getElementById("botaoIncr");
var botaoDecr = document.getElementById("botaoDecr");
var exibirContador = document.getElementById("contador");

var contador = 0;

//incrementando o contador
botaoIncr.addEventListener("click", function(){
    contador++;
    exibirContador.textContent = contador;
});

//decrementando o contador com restrição
botaoDecr.addEventListener("click", function(){
    if(contador>0){
        contador--;
        exibirContador.textContent = contador;
    } else
    alert("O contador já está em zero!");
});

var texto = document.getElementById("texto");
var paragrafos = document.getElementById("paragrafos");
var qtdCaracteres = document.getElementById("qtdCaracteres");

function adicionarTexto(event){
    if(event.key === "Enter" && texto.value.trim() !== "") {
        let novoParagrafo = document.createElement("p"); 
        novoParagrafo.textContent = texto.value;
        paragrafos.appendChild(novoParagrafo);
        texto.value = ""; 
        contarCaracteres() //atualiza o contador
    }
}

function contarCaracteres(){
    let textoDigitado = texto.value; // Captura o valor atualizado do campo de texto
    let caracteresSemEspacos = textoDigitado.replace(/\s/g, ""); // Remove os espaços
    qtdCaracteres.textContent = `${caracteresSemEspacos.length} caracteres`;
}

var listasDiv = document.getElementById("listas");

function organizarTexto(tipoLista) {
    listasDiv.innerHTML = "";

    var textos = Array.from(paragrafos.children).map(paragrafo => paragrafo.textContent);  // Pega os textos dos parágrafos adicionados

    var lista;
    if (tipoLista === "ordenada") {
        lista = document.createElement("ol"); // Lista ordenada
        textos.sort(); 
    } else {
        lista = document.createElement("ul"); // Lista não ordenada
    }

    textos.forEach(function (texto) {
        var item = document.createElement("li");
        item.textContent = texto;
        lista.appendChild(item);
    });

    listasDiv.appendChild(lista);
}

function resetar() {
    contador = 0;
    exibirContador.textContent = contador;

    paragrafos.innerHTML = "";

    listasDiv.innerHTML = "";

    texto.value = "";
    qtdCaracteres.textContent = "0 caracteres";
}

