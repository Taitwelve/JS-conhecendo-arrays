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

//_______________________________________________________________________

let numeroOriginal = 10;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal);