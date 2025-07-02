// // Loop for para calcular a média de notas
const precos = [5.5, 6.2, 14, 19.5];
let desconto = 0.90;
for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
}
console.log(precos);

// //--------------------------------------------------------------------------
// //loop for-of para calcular a média de notas
const preco = [5.5, 6.2, 14, 19.5];
let descontos = 0.90;
for (let precoFinal of preco) {
 precoFinal = preco * descontos;
}
console.log(preco);

//---------------------------------------------------------------------------
//Exercício

const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const media = soma / numeros.length;

console.log("A média dos números é:", media); 