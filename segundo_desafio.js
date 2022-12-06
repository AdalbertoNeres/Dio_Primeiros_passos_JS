/* Faça um programa para calcular o valor gasto com combustível em uma viagem.

Você terá 5 variáveis:
1 - preço do entanol.
2 - preço gasolina.
3 - tipo de combustível que carro usa.
4 - Gasto médio de combustível do carro por km.
5 - Distância pecorrida em KM.

Imprima no console o valor que foi gasto com combustível nesta viagem.
*/
console.log('Olá');

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const tipoCombustivel = 'Etanol';
const kmPorLitro = 10;
const distanciakm = 100;

const litrosConsumidos = distanciakm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto);
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto);
}




