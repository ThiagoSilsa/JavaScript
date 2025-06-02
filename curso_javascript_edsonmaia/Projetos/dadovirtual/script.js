// Usar função getramInt(?,?)

// Essa var ta sem sentido aqui
let numeroSorteado = document.querySelector('#dado')

// Imagem
let imgDado = document.querySelector('#imgDado')

// Botão
let btnSortear = document.querySelector('#btnSortear')

// Interrogação:
let sorteado = document.querySelector('#sorteado')

// Som
let dadoRolando = document.querySelector('#dadoRolando')


btnSortear.addEventListener('click', function(){
    // Adicionar a animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // Tocar efeito sonoro!
    dadoRolando.play()

    // Recebendo numero sorteado
    numeroSorteado = getRandomInt(1,6)

    // Some com o botão de sortear
    btnSortear.style.display = 'none' 



    // Tempo para o botão voltar a aparecer!
    setTimeout(() => {
        btnSortear.style.display = "inline-block"
        // Alterando valor do interrogação
        sorteado.textContent = numeroSorteado
        // Alterando imagem:
        imgDado.setAttribute('src', 'img/' + numeroSorteado + '.png')

        // Removendo animações
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750);


})



function getRandomInt(min, max){
    min = Math.ceil(min) // Arredonda para cima
    max = Math.floor(max) // Arredonda para baixo
    return Math.floor(Math.random() * (max - min + 1)) + min
}