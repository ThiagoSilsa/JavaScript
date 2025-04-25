// Calcular nota e dizer se foi aprovado ou não


function calcular_media(x, y){
    var media = (x+y)/2
    if (media >= 7){
        console.log(`Média: ${media} Acima de 7, Aprovado!`)
    }else if (media < 7){
        console.log(`Média: ${media} Abaixo de 7, Reprovado!`)
    }
}

calcular_media(2,9)