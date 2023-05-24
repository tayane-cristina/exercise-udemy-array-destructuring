//desestruturação de arrays e objetos;

//desestruturação simples:
const array = [1, 2, 3, 4, 5, 6];

[ primeiroNumero, segundoNumero, terceiroNumero] = array

console.log(primeiroNumero, segundoNumero, terceiroNumero) // => os valores no console correspondem aos três primeiros números do array.

//Pegando o resto:
const numbers = [125, 265, 369, 245, 845, 632, 145]

const [ item1, item2, item3, ...resto ] = numbers
console.log(item1, item2, item3, resto)