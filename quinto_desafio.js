/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
e a escolha da condição de pagamento.
Utilize a os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e fetuar o cálculo.

Código Condição de Pagamento:
1 - Á vista Débito, recebe 10% desconto.
2 - Á vista Dinheiro ou Pix, 15% desconto.
3 - Em duas vezes, preço normal etiqueta sem juros.
4 - Acima de duas vezes, preço normal mais juros de 10%.
*/
const precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if (formaPagamento ===2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if (formaPagamento ===3){
    console.log(precoEtiqueta);
}else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
