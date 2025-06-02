// 1° Resgatando as variáveis a serem trabalhadas:

let form = document.querySelector('form')
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#resultadomedia')
let cxSituacao = document.querySelector('#situacao')
let aviso = document.querySelector('#aviso')



// 2° Resgatar botão
let btnEnviar = document.querySelector('#btnenviar')
let btnLimpar = document.querySelector('#btnlimpar')
let limp = "Limpar"

// 3° Função ao submetes:
btnEnviar.addEventListener('click' , function(e){
    e.preventDefault()
    let media =  ((Number(cxNota1.value) + Number(cxNota2.value))/2)
    cxMedia.value = media

    let res = situacaoMedia(media)

    formatarSitu(res)

    cxSituacao.value = res
})

btnLimpar.addEventListener('click', function(e){
    formatarSitu("Limpar")

})

function situacaoMedia(media){
    if (media >= 7){
        resultado = "Aprovado"
    }else if (media <= 7 && media >= 5){
        resultado = "Recuperação"
    }else {
        resultado = "Reprovado"
    }
    return resultado
}

function validarNumero(numero){
    if (numero.value > 10 || numero.value < 0){
        aviso.textContent = "Insira um número de 0 à 10!"
        aviso.classList.add('reprovado')
        form.reset()
        setTimeout(function(){
            aviso.textContent= ""
            aviso.classList.remove('reprovado')
        }, 2000)
    }
}

function formatarSitu(res){
    switch (res){
        case 'Aprovado':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            break

        case 'Reprovado':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            break

        case 'Recuperação':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.add('recuperacao')
            break
        case 'Limpar':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            break


}}
