/* faça um algoritimo que dada as tres notas tiradas por um anluno em um semestre da faculdade calcule e imprema sua médi
e sua classificação conforme tabela abaixo:

Média = (nota1 + nota2 + nota3) /3

Classificação:
média menor que 5, reprovado
média entre 5 e 7, recuperação
média acima de 7, Aprovado
*/
const nota1 = 0;
const nota2 = 7;
const nota3 = 4;

const media = (nota1 + nota2 + nota3) / 3;
if (media < 5) {
    console.log('Aluno REPROVADO');
} else if (media >= 5 && media <= 7) {
    console.log('Aluno está de RECUPERAÇÃO');
} else {
    console.log('Aluno está APROVADO');
}
console.log(media);
