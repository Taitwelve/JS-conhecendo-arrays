const notas = [5.5, 6.5, 10, 9.5, 8.0];
// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// });
const notasAtualizadas = notas.map(nota => nota + 1); //Usar parenteses nos parâmetros é opcional quando há apenas um parâmetro
console.log(notasAtualizadas);  
