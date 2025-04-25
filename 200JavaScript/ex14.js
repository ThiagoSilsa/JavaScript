// Verificar se um ano é bissexto
// Ano bissexto são anos que são divisíveis por 4 exceto os que são divisiveis por 100 mas não por 400


function ano_bisexto(ano){

    if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0)){
        console.log(`O ano de ${ano} é bissexto`)
    }else {
        console.log(`O ano de ${ano} não é bissexto`)

    }
}

ano_bisexto(2000)