const notas = [7, 8, 9, 10];
const novaListaNotas = [...notas, 10];

// Spread operator
// novaListaNotas.push(10);
// let nota = 9.75;
// let novasNotas = nota;

// nota = 8.5; 

console.log(notas); 
console.log(novaListaNotas);

//_______________________________________________________________________

let num1 = 10;
let num2 = num1;

num2 += 5;
num1 += 1;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);