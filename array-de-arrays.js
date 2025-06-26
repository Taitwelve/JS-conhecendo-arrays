const alunos = ['João', 'Maria', 'Pedro', 'Ana'];
const medias = [7.5, 8.0, 6.5, 9.0];

const lista = [alunos, medias];
console.log('Lista de alunos e médias:', lista);
console.log ( `O aluno na posição 2 é ${lista[0][2]} e sua média é ${lista[1][2]}` );
console.log ( `A aluna na posição 3 é ${lista[0][3]} e sua média é ${lista[1][3]}` );
console.log ( `A aluna na posição 1 é ${lista[0][1]} e sua média é ${lista[1][1]}` );
console.log ( `O aluno na posição 0 é ${lista[0][0]} e sua média é ${lista[1][0]}` );
console.log ( `A média do aluno ${lista[0][2]} é ${lista[1][2]}` );
console.log ( `A média da aluna ${lista[0][3]} é ${lista[1][3]}` );
console.log ( `A média da aluna ${lista[0][1]} é ${lista[1][1]}` );
console.log ( `A média do aluno ${lista[0][0]} é ${lista[1][0]}` );
console.log('Lista de alunos:', lista[0]);
console.log('Lista de médias:', lista[1]);
console.log('Quantidade de alunos:', lista[0].length);  