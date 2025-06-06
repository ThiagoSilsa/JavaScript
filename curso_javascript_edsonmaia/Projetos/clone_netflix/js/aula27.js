// CARROSSEL
// seleciona todos os lis da uls
    let ulsElis = document.querySelectorAll('ul li')
    console.log(ulsElis)

let qtdItens = ulsElis.length
// Sabendo a quantidade de videos
console.log('Quant. lis = ' + qtdItens)

// let numDeItens = 6

// Selecionando as lis da listas,
// logo, cada var abaixo é uma lista de li´s
let lista1 = document.querySelectorAll('#lista1 li')
let lista2 = document.querySelectorAll('#lista2 li')
let lista3 = document.querySelectorAll('#lista3 li')
let lista4 = document.querySelectorAll('#lista4 li')
let lista5 = document.querySelectorAll('#lista5 li')

// Mostrar o número de videos
let numDeVideos = document.querySelectorAll('.numDeVideos')

// Atribuindo o numero de videos de acordo com o tamanho de cada lista, ou seja, quantos li tem dentro de cada lista
numDeVideos[0].textContent = lista1.length
numDeVideos[1].textContent = lista2.length
numDeVideos[2].textContent = lista3.length
numDeVideos[3].textContent = lista4.length
numDeVideos[4].textContent = lista5.length


// Função recebe indice, +1 : avança; -1: recua
// Função recebe o numero da lista, de qual lista estamos falando:
function show(indice, indiceLista) {
    // let n = indice
    // numDeItens =  numDeItens + indice
    // console.log(n + " " + numDeItens)

    // Acessando a lista específica de acordo com o indice da mesma fornecido
    let listaUl = document.querySelector('#lista'+indiceLista)
    //console.log(listaUl)

    let mover  = 100
    let posicaoXDireita = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) {
        // Se o índice for mais 1:
        // Move 100 px para a direita e 0 para a esquerda
        //console.log('Mover para direita')
        listaUl.scrollBy(posicaoXDireita, 0)
    }
    if(indice == -1) {
        // Se menos 1, move 100 para a esqquerda, por isso negativo
        //console.log('Mover para esquerda')
        listaUl.scrollBy(posicaoXEsquerda, 0)
    }

}

