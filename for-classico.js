const notas = [10, 8.5, 7, 9.5, 6, 8, 10];
//Primeira expressão é executada apenas uma vez 
//Segunda expressão é a condição da execução do loop
//Terceira expressão é executada sempre ao final do bloco
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);
    console.log(`Nota ${indice + 1}: ${notas[indice]}`);
}

//---------------------------------------------------------------
//Exemplo de for que imprime no terminal numeros de 0 a 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//---------------------------------------------------------------
// Código de for infinito, ele não tem uma condição de parada
for (let indice = 0; ; indice++) {
 console.log(indice);
}
