// Selecionar todos os elementos a serem manipulados no formulário

// Selecionei o formulário
let formulario = document.querySelector('form')

// Caixas dentro do formuçário:

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')

// resgatando o aviso e pessoa

let aviso = document.querySelector('#aviso')

// irá gerar um array
let dados = document.querySelectorAll('.pessoa')

// Resgatando botões:

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

// Para resgatar dados dentro de caixas de texto usa-se o .value
// Antes de resgatar deve-se determinar um evento para pegar os dados

btnEnviar.addEventListener('click', function
    (e) {
    // Resgatando valores dos inputs:
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso/(altura*altura)).toFixed(2)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    // Passando resultado para a caixa imc
    cxImc.value = imc

    // Chamar função que informe a situação do peso da pessoa:
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    // Prevenir comportamento padrão:
    e.preventDefault()

    let pessoa = {
    nome : nome,
    idade : idade,
    peso : peso,
    altura : altura,
    imc : imc
    }
    dados[0].textContent = pessoa.nome
    dados[1].textContent = pessoa.idade + " anos"
    dados[2].textContent = pessoa.peso + " kg"
    dados[3].textContent = pessoa.altura + " cm"
    dados[4].textContent = pessoa.imc + " imc"

    });

// Substituir dados:




// Cirar objeto pessoa e substituir nos dados:

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}