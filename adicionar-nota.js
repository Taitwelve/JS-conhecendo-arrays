const notas = [10, 6.7, 9];
notas.push(7.2);
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média das notas foi: ${media.toFixed(2)}`);
