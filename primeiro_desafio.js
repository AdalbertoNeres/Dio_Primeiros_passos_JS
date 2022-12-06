/* Faça um programa para calcular o valor gasto com combustível em uma viagem.

Você terá 3 variáveis:
1 - Valor do combustível.
2 - Consumo de combustível do carro por km.
3 - Distância pecorrida em KM.

Imprima no console o valor que foi gasto com combustível nesta viagem.
*/
console.log('Olá');

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciakm = 100;

const litrosConsumidos = distanciakm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);
