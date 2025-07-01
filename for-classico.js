const notas = [10, 8.5, 7, 9.5, 6, 8, 10];
//Primeira expressão é executada apenas uma vez 
//Segunda expressão é a condição da execução do loop
//Terceira expressão é executada sempre ao final do bloco
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
}