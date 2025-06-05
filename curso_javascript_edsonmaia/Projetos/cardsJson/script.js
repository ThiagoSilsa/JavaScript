// Verificar tamanho do arquivo Json,
// Loop for com innerHTML adicionando cada card

// Como acessar arquivo Json?

let imgFoto = document.querySelector("#foto");
let nome = document.querySelector("#nome");
let planeta = document.querySelector("#planeta");
let especie = document.querySelector("#especie");

// Section que acomoda as cartas:
let sectionConteudos = document.querySelector(".conteudos");

const url = "cards.json";

function pegarDados() {
  fetch(url)
    .then((response) => response.json())
    .then((dados) => {
      if (dados.erro) {
        console.log("Erro ao acessar o JSON");
        return;
      }
      //Só consigo trabalhar com os dados aqui dentro
      let qtdAliens = dados.aliens.length;
      console.log(qtdAliens);
      atribuirDados(dados, qtdAliens);
    });
} // fim pegarDados

// Desenhando a primeira carta:
function atribuirDados(dados, qtdAliens) {
  imgFoto.setAttribute("src", "imagens/fantasmatico.jpg");
  nome.textContent = "Fantasmático".toUpperCase();
  planeta.textContent = "Anur Phaetos";
  especie.textContent = "Ectonurita";

  //Criando o resto:
  // 1° Cria o objeto

  for (let i = 0; i < qtdAliens; i++) {
    let carta = document.createElement("article");
    carta.setAttribute("class", "card");
    sectionConteudos.appendChild(carta);

    let novoNome = document.createElement("h2");
    novoNome.setAttribute("id", "nome");
    novoNome.textContent = dados.aliens[i].nome.toUpperCase();
    carta.appendChild(novoNome);

    let imagem = document.createElement("img");
    imagem.setAttribute("id", "foto");
    let urlImagem = dados.aliens[i].foto;
    imagem.style.backgroundImage = "url(imagens/" + urlImagem + ")";
    carta.appendChild(imagem);

    let novoPlaneta = document.createElement("h2");
    novoPlaneta.setAttribute("id", "planeta");
    novoPlaneta.setAttribute("class", "info");
    novoPlaneta.textContent = dados.aliens[i].planeta;
    carta.appendChild(novoPlaneta);

    let novaEspecie = document.createElement("h2");
    novaEspecie.setAttribute("id", "especie");
    novaEspecie.setAttribute("class", "info");
    novaEspecie.textContent = dados.aliens[i].especie;
    carta.appendChild(novaEspecie);
  }
}

pegarDados();
