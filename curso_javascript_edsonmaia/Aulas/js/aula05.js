/* Aula 11 de JS Eventos */

let titulo = document.querySelector('#titulo')
titulo.addEventListener('mouseover', function() {
	console.log('Focou no título2')
})


click = 0
let box = document.querySelector('article')
function clickbox(){
    box.textContent = `clicou na box ${click} vezes`
    click += 1
}


function carregou() {
    console.log('Página carregada com sucesso!')
}

function focou() {
    console.log('Foco no título')
}

function rolouPagina() {
    console.log('Pagina rolando')
}

function focoNoCampo() {
    console.log("Foco no campo de texto")
}

function semFocoNoCampo() {
    console.log("Saiu o Foco do campo de texto")
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras) )
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover a seta do mouse esta no element
botao1.addEventListener('mouseover', function () {
    console.log('Foco no botão 1')
})

// focusout ou blur quando sai o focu
botao2.addEventListener('blur', function () {
    console.log('Foco no botão 2')
})

// 1 click do mouse
botaoEnviar.addEventListener('click', function (event) {
    event.preventDefault()
    console.log('Clicou no botão Enviar')
})