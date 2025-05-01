// Criar função que verifica palíndromo



// Aqui estou fazendo por array
// Quebro a palavra com o .spli, depois inverto com o .reverse e depois junto em uma mesma string usando o .join
/*
function palindromo_array(palavra){
    var palavra_Invertida = palavra.split('').reverse().join('')
    if (palavra_Invertida == palavra){
        console.log('É um palíndromo!')
    }else{
        console.log('É um palíndromo!')
        }
}
palindromo_array('Penca')
*/

// Fazendo com while sozinho!


function palavra_while(palavra) {
    // Sabendo tamanho da palavra
    var tamanho = (palavra.length);
    // iniciando palavra_pronta para poder usar no while
    var palavra_pronta = ''
    // iniciando o indice i
    i = 1
    while (i <= tamanho) {
        // imrpime o valor do indice i
        console.log(palavra[tamanho - i])
        palavra_pronta = palavra_pronta + palavra[tamanho - i]
        // incremento de i
        i++
    }
    console.log(palavra_pronta)

    if (palavra_pronta == palavra) {
        console.log('É um palíndromo!')
    }else{
        console.log('Não é um palíndromo!')

    }
}

palavra_while('mirim')

// Fazendo com o for

function palavra_for(palavra) {
    // Sabendo tamanho da palavra
    var tamanho = (palavra.length);
    // iniciando palavra_pronta para poder usar no while
    var palavra_pronta = ''
    // iniciando o indice i
    for (i = 1; i <= tamanho; i ++) {
        // imrpime o valor do indice i
        console.log(palavra[tamanho - i])
        palavra_pronta = palavra_pronta + palavra[tamanho - i]
        // incremento de i

    }
    console.log(palavra_pronta)

    if (palavra_pronta == palavra) {
        console.log('É um palíndromo!')
    }else{
        console.log('Não é um palíndromo!')

    }
}

palavra_for('mirim')
