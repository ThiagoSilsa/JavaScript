// Pode ou não votar?


// Brasil vota obrigatório do 18 a 65
// Opcional dos 16 a 17 e acima de 65
// Não vota abaixo de 16


function votaounaovota(idade) {
    if (idade >= 18 && idade < 65) {
        console.log(`Com ${idade} anos, o voto é obrigatório!`)
    } else if ((idade >= 65 && idade < 75) || (idade < 18 && idade >= 16)) {
        console.log(`Com ${idade} anos, o voto é Opcional!`)
    } else if(idade >= 75 || idade < 16){
        console.log(`Com ${idade} anos, o voto é Proibido!`)
    }

}

votaounaovota(100)