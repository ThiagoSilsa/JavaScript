// Recebe número e diz se é positivo, negativo ou zero
//

function positivo_negativo(x){
    if (x < 0){
        console.log('O número',x , 'é Negativo!')
    }else if (x > 0){
        console.log('O número',x , 'é Positivo!')
    }else{
        console.log('O número', x , 'é Zero')
    }
}

positivo_negativo('h')