// Recuperando variáveis:
// Recuperando o dado do input:
let txtInput = document.querySelector("#txtTarefa");

// Selecionando onde serão adicionadas as tarefas:
let tarefasContainer = document.querySelector("#tarefasContainer");

// Selecionando a info
let info = document.querySelector("#info");

// resgatando botão checked

let id = 0;

txtInput.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    const txtDigitado = e.target.value.trim();

    if (txtDigitado === "" || txtDigitado == null) {
      mudarAlerta("Tarefa Vazia");
    } else {
      id++;
      criarTarefa(txtDigitado, id);
      txtInput.value = "";
    }
  }
});

function criarTarefa(txtDigitado, id) {
  // Criando acontainer da tarefa
  const tarefa = document.createElement("div");
  tarefa.setAttribute("class", "tarefa");

  // Criando o checkbox da tarefa:
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  // Criando paragrafo com nome da tarefa:
  const nome = document.createElement("p");
  nome.setAttribute("class", "nomeTarefa");

  // botão excluir
  const btnExcluir = document.createElement("button");
  btnExcluir.setAttribute("class", "btnExcluir");
  btnExcluir.textContent = "🗑️";

  // Adicionando os elementos

  tarefa.appendChild(checkbox);
  tarefa.appendChild(nome);
  tarefa.appendChild(btnExcluir);
  tarefasContainer.appendChild(tarefa);

  // Adicionando atributo de onlclik para chamar a função de riscar
  // Não preciso iterar pois está "dentro do mesmo escopo"
  checkbox.addEventListener("change", function () {
    //Se true, coloca riscado se false retira!
    nome.classList.toggle("riscado", checkbox.checked);
  });

  //Botão de excluir:
  btnExcluir.addEventListener('click', () =>{
    tarefasContainer.removeChild(tarefa)
    mudarAlerta(`Tarefa ${id} pagada com sucesso!`)

  })







  nome.textContent = `Tarefa ${id} `+ txtDigitado;
  mudarAlerta(`Tarefa ${id} Criada com sucesso!`);
}

function riscarTarefa() {}

function mudarAlerta(texto) {
  info.textContent = texto;
  setTimeout("voltarInfo()", 2000);
}
function voltarInfo() {
  info.innerHTML =
    "<p>Digite a tarefa e aperte <strong>Enter</strong> para adiona-la a lista</p>";
}
