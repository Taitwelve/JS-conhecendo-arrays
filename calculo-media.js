// const nota1 = 10;
// const nota2 = 6.7;
// const  nota3 = 8.5;
// const nota4 = 7.2;

const notas = [10, 6.7, 9, 7.2];
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`A média das notas é: ${media.toFixed(2)}`);

//---------------------------------------------------------------------------
const numero1 = 50;
const numero2 = 43;
const numero3 = 12;
// utilizando array
const numeros = [50, 43, 12];
console.log(`O maior número é: ${Math.max(...numeros)}`);
console.log(`O menor número é: ${Math.min(...numeros)}`);
console.log(`A soma dos números é: ${numeros.reduce((acc, num) => acc + num, 0)}`);
console.log(`A média dos números é: ${(numeros.reduce((acc, num) => acc + num, 0) / numeros.length).toFixed(0)}`);
console.log(numeros);