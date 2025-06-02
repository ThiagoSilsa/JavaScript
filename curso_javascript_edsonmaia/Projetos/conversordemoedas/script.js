// Recuperando valor

let valorDigitado = document.querySelector('#valor')

// Recuperando moeda, cria um array:

let moedaSelecionada = document.getElementsByName('moeda')

// Recuperando botões

let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

// aviso
let aviso = document.querySelector('#aviso')

// Valores das moedas:

let valorDolar = 5.70
let valorEuro = 6.51
let valorLibra = 7.71
let valorBitcoin = 594891.39
let valorReal = 0

let moedaEstrangeira = ''
let moedaConvertida = ''

// funções:

// Mensagem para exibir valores:

function mensagemFormatada(moedaConvertida){
    isNaN(valorReal) ? valorReal = 0 : ''
    console.log('Moeda convertida ' + moedaConvertida)
    aviso.textContent = 'O valor ' + (valorReal).toLocaleString('pt-br',{ style: 'currency', currency: "BRL"}) + ' convertido em ' + moedaEstrangeira + ' é ' + moedaConvertida

}


function bloquearBotao(){
    if (valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null){
        btnConverter.setAttribute('disabled', 'disabled')
    }
}




function ativarBotao(){
    if (valorDigitado.value > 0){
        btnConverter.removeAttribute('disabled')
    }

}





// Liberar ou não o botão, se o botão for liberado:
btnConverter.addEventListener('click', function(){
    // Converter valores para float
    valorReal = parseFloat(valorDigitado.value)
    console.log(valorReal)
    // iterar o radio
    for (let i = 0; i < moedaSelecionada.length; i++){
        if (moedaSelecionada[i].checked == true){
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }
    
    // Convertendo valores:
    switch (moedaEstrangeira){
        case 'Dólar':
            moedaConvertida = valorReal / valorDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', {style: 'currency', currency: 'USD' } ))
            break
        case 'Euro':
            moedaConvertida = valorReal / valorEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', {style: 'currency', currency: 'EUR' } ))
            break
        case 'Libra':
            moedaConvertida = valorReal / valorLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Bitcoin':
            moedaConvertida = valorReal / valorBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
        break
    }
})






btnLimpar.addEventListener('click', function(){
    //Focar no input
    valorDigitado.focus()

    // Zerar valor do input
    valorDigitado.value = ''

    //Alterar valor do input
    aviso.textContent = "Digite o valor, escolha a moeda e clicque em converter!"

    // Limpar caixas do radio:
    // Radio tem propriedade chamada checked que pode ser true ou false

    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})