const notas = [10, 6.7, 9, 7.2, 10];
notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média das notas é: ${media.toFixed(1)}`);