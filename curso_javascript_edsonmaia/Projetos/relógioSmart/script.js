// Recuperando variáveis:

let h = document.querySelector("#h");
let m = document.querySelector("#m");
let s = document.querySelector("#s");

let hSmart = document.querySelector("#hSmart");
let mSmart = document.querySelector("#mSmart");
let sSmart = document.querySelector("#sSmart");

let diaSemana = document.querySelector("#semana");
let data = document.querySelector("#data");

let cidade = document.querySelector(".city");
let temperatura = document.querySelector("#temp");
let umidade = document.querySelector("#umidade");

// recuperando dado de data e hora:

function moveRelogio() {
  // Recuperando horário:
  let dataHora = new Date();

  // Recuperando dados:
  let hora = dataHora.getHours();
  let minuto = dataHora.getMinutes();
  let segundo = dataHora.getSeconds();

  // Tenho que por o zero na frente:
  if (String(hora).length == 1) {
    hora = "0" + hora;
  }
  if (String(minuto).length == 1) {
    minuto = "0" + minuto;
  }
  if (String(segundo).length == 1) {
    segundo = "0" + segundo;
  }

  h.textContent = hora;
  m.textContent = minuto;
  s.textContent = segundo;
  hSmart.textContent = hora;
  mSmart.textContent = minuto;
  sSmart.textContent = segundo;

  // Colocando para a função rodar a cada segundo
  setTimeout("moveRelogio()", 1000);
}
moveRelogio()
function pegarData() {
  let dataHora = new Date();
  // setando a data:
  let diaMes = dataHora.getDate();
  let mes = dataHora.getMonth() + 1;
  let ano = dataHora.getFullYear();

  if (String(diaMes).length == 1) {
    diaMes = "0" + diaMes;
  }
  if (String(mes).length == 1) {
    mes = "0" + mes;
  }

  data.textContent = String(diaMes) + "/" + String(mes) + "/" + String(ano);
  // Pega em forma de string, sendo inteiro
  diaAtual = dataHora.getDay();

  //Mudando o dia de acordo com o resultado
  switch (diaAtual) {
    case 0:
      diaSemana.textContent = "DOM";
      break;
    case 1:
      diaSemana.textContent = "SEG";
      break;
    case 2:
      diaSemana.textContent = "TER";
      break;
    case 3:
      diaSemana.textContent = "QUA";
      break;
    case 4:
      diaSemana.textContent = "QUI";
      break;
    case 5:
      diaSemana.textContent = "SEX";
      break;
    case 6:
      diaSemana.textContent = "SAB";
      break;
  }
}
pegarData();

// Pegar posição do usuário:
