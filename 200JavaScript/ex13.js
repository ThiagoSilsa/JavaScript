// Função de cálculo de IMC


// Abaixo do peso IMC < 18.5
// Normal 18.5 <= x <25 
// Sobrepeso 25 <= x < 30 
// Obeso x >= 30 


function calculo_IMC(peso, altura){
    var imc = peso /(altura*altura)
    if (imc < 18.5){
        console.log('Abaixo do peso')
    }
    else if (imc >= 18.5 && imc < 25){
        console.log('Normal')
    }
    else if (imc >= 25 && imc < 30){
        console.log('Sobrepeso')
    }else {
        console.log('Obeso')
    }

}

let altura = 1.75
let peso = 80

calculo_IMC(peso, altura)