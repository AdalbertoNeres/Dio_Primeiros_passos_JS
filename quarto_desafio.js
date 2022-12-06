/*
O IMC - Indice de massa Corporal é critério da Organização mundial de saúde para dar uma indicação s
obre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura*altura).

Elabore um algoritimo que dado o peso e a altura de adulto mostre sua condição de acordo com a tabela abaixo:

IMC em Adultos condição:
- Abaixo de 18.5 ABAIXO DO PESO
- Entre 18.5 e 25 NORMAL
- Entre 25 e 30 ACIMA DO PESO
- Entre 30 e 40 OBESO
- Acima de 40 OBESIDADE MORBIDA
*/
const peso = 40;
const altura = 1.76;

const imc = peso / Math.pow(altura,2);

console.log(imc);
if (imc < 18.5) {
    console.log('ABAIXO DO PESO');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('NORMAL');
} else if (imc >= 25 && imc <= 30) {
    console.log('ACIMA DO PESO');
} else if (imc >= 30 && imc <= 40) {
    console.log('OBESO');
} else {
    console.log('OBESIDADE MORBIDA');
}
