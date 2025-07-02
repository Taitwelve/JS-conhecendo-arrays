const notas = [5.5, 6.5, 10, 9.5];
notas.forEach(function (nota) {
  console.log(nota);
});

//-----------------------------------------------------------------

const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
  console.log(lista[indice]);
}

//-----------------------------------------------------------------

const numeros = [2, 4, 6, 8];
let soma = 0;

numeros.forEach(numero => {
    soma += numero;
});

console.log("A soma dos números é:", soma);