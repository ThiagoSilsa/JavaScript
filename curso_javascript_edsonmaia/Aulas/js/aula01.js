

// O write vai ser depreciado!
document.write("Olá mundo");
console.log("Olá mundo");


let variavel = true

const PI = 3.15

document.write(`Número pi : ${PI}`)


// Arrays

let produtos = ["Banana", "Feijão", "Uva"] //
let meses = ['jan', 'fev', 'mar', 'jun', 'jul', 'ago']

produtos.push('Açucar', 'Caneta')


console.log(produtos)




// Arrays e objetos

let pessoa = {
    nome : "Thiago",
    idade : 24,
    peso : 80.00,
    altura : 1.75,
    doador : false
}
let dinheiro = 20.98
let imc = pessoa.peso / (pessoa.altura**2)




document.write(`O IMC do ${pessoa.nome} é ${imc.toFixed(2)}`)
document.write(`<br>`)
document.write(`<br>`)
document.write(`O valor tipo real é: ${new Intl.NumberFormat('pt-BR').format(dinheiro)}`)


document.write(`<hr>`)

document.write(`Preço total: ${dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)