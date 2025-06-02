// Recuperando dados:

// Range
let sliderC = document.querySelector('#celsius')
let sliderF = document.querySelector('#fahrenheit')
let sliderK = document.querySelector('#kelvin')

// Números:

let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')

numeroC.value = sliderC.value

function atualizaC(){
    numeroC.value = sliderC.value
}
function atualizaF(){
    // achando valor em fahrenheint
    numeroF.value = ((sliderC.value * 9/5) + 32).toFixed(2)
    sliderF.value = numeroF.value
}
function atualizaK(){
    numeroK.value = (parseFloat(numeroC.value) + 273).toFixed(2)
    sliderK.value = parseFloat(numeroK.value)
}

function zerar(){
    numeroC.value = 0
    numeroF.value = 0
    numeroK.value = 0


    sliderC.value = 0
    sliderF.value = 32
    sliderK.value= 273
}