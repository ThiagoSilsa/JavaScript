//


let numQuestao = document.querySelector('#numQuestao')
let txtQuestao = document.querySelector('#txtQuestao')

let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

let infoQuest = document.querySelector('#infoQuest')
let pontos = document.querySelector('#pontos')
let pontuacao = 0

let contador = 1
// contatdor de número de questão
// Fazer passar pra outra questão
// Função que altera as coisas de acordo com o contador

btn1.addEventListener('click', function() {
    somadorPontos(contador, btn1.value)

    contador ++
    console.log(contador)

    mudarQuest(contador)
    
})
btn2.addEventListener('click', function() {
    somadorPontos(contador, btn2.value)
    
    contador ++
    console.log(contador)
    
    mudarQuest(contador)
})
btn3.addEventListener('click', function() {
    somadorPontos(contador, btn3.value)
    contador ++
    console.log(contador)

    mudarQuest(contador)
})



function mudarQuest(contador){
    numQuestao.textContent = contador
    infoQuest.textContent = 'Questão ' + contador + ' de 5' 
    switch(contador){
        case 2:
            // Questão 2
            txtQuestao.textContent = "Qual prêmio ganhou Marie Currie?"
            btn1.textContent = 'Nobel'
            btn2.textContent = 'Da paz'
            btn3.textContent = 'Globo de ouro'
            break
        case 3:
            txtQuestao.textContent = "Vinagre é..."
            btn1.textContent = 'Básico'
            btn2.textContent = 'Ácido'
            btn3.textContent = 'Neutro'
            break
        case 4:
            txtQuestao.textContent = "Ao ganhar um elétron o elemento se torna um..."
            btn1.textContent = 'Cátion'
            btn2.textContent = 'Ânodo'
            btn3.textContent = 'Ânion'
            break
        case 5:
            txtQuestao.textContent = "NaCl é ..."
            btn1.textContent = 'Ácido'
            btn2.textContent = 'Base'
            btn3.textContent = 'Sal'
            break
            case 6:
            txtQuestao.textContent = 'Você fez ' + pontuacao + ' Pontos ao total, parabéns!'
            btn1.classList.remove('btn1')
            btn2.classList.remove('btn2')
            btn3.classList.remove('btn3')

            btn1.classList.add('sumiu')
            btn2.classList.add('sumiu')
            btn3.classList.add('sumiu')
            numQuestao.classList.remove('numQuestao')
            numQuestao.classList.add('sumiu')
            pontos.classList.add('sumiu')
            infoQuest.classList.add('sumiu')


            break
    }
}

function somadorPontos(contador, numBotao){
    if (contador == 1 && numBotao == 2){
        pontuacao += 10
        pontos.textContent = pontuacao + ' Pontos ao total '
    } else if (contador == 2 && numBotao == 1){
        pontuacao += 10
        pontos.textContent = pontuacao + ' Pontos ao total '        
    } else if (contador == 3 && numBotao == 2){
        pontuacao += 10
        pontos.textContent = pontuacao + ' Pontos ao total '               
    } else if (contador == 4 && numBotao == 3){
        pontuacao += 10
        pontos.textContent = pontuacao + ' Pontos ao total '                       
    } else if (contador == 5 && numBotao == 3){
        pontuacao += 10
        pontos.textContent = pontuacao + ' Pontos ao total '                       
    }
}