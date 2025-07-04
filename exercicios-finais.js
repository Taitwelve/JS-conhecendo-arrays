// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const numeros = [1, 2, 3, 4, 5];
for (const numero of numeros) {
    console.log(numero);
}

//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function imprimirIndicesEElementos(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice: ${i}, Elemento: ${array[i]}`);
    }
}
imprimirIndicesEElementos(['a', 'b', 'c', 'd']);

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
function somarElementos(array) {
    let soma = 0;
    for (const numero of array) {
        soma += numero;
    }
    return soma;
}
const numerosInteiros = [1, 2, 3, 4, 5];
const resultadoSoma = somarElementos(numerosInteiros);
console.log(`Soma dos elementos: ${resultadoSoma}`);


//Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
function encontrarMenorEMaior(array) {
    let menor = array[0];
    let maior = array[0];
    
    for (const numero of array) {
        if (numero < menor) {
            menor = numero;
        }
        if (numero > maior) {
            maior = numero;
        }
    }
    
    return `O menor número é ${menor} e o maior número é ${maior}`;
}
const numerosInteiros2 = [10, 5, 8, 20, 15];
const resultadoMenorMaior = encontrarMenorEMaior(numerosInteiros2);
console.log(resultadoMenorMaior);

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeroz = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
for (const numero of numeroz) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const numerosParaMedia = [10, 20, 30, 40, 50];
let somaMedia = 0;
for (const numero of numerosParaMedia) {
    somaMedia += numero;
}
const media = somaMedia / numerosParaMedia.length;
console.log(`A média dos números é: ${media}`);


//Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
frutas.forEach((fruta, indice) => {
    console.log(`Índice: ${indice}, Fruta: ${fruta}`);
});

//Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const numero = [5, 10, 15, 20, 25];
const numeroProcurado = 25;
const indice = numero.indexOf(numeroProcurado);
if (indice !== -1) {
    console.log(`O número ${numeroProcurado} está presente no índice: ${indice}`);
}else {
    console.log('-1');
}   

//__________________________________________________________________________________________________________

const nomesTurmaA = ['João Silva','Maria Santos', 'Pedro Almeida'];
const nomesTurmaB = ['Carlos Oliveira','Ana Souza','Lucas Fernandes'];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = 'Ana Soa';
const alunoEncontrado = todasAsTurmas.find(aluno => aluno === alunoProcurado);
if (alunoEncontrado) {
    console.log(`Aluno(a) encontrado(a): ${alunoEncontrado}`);
}
else {
    console.log('Aluno(a) não encontrado(a)');
}


//__________________________________________________________________________________________________________

const numerosInt = [6, 9, 12, 15, 18, 21];
//Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
numerosInt.forEach((numero) => {
    console.log(numero * 3);
});
const indiceNumero18 = numerosInt.findIndex(numero => numero === 18);   
if (indiceNumero18 !== -1) {
    console.log(`O índice do número 18 é: ${indiceNumero18}`);
} else {
    console.log('Número 18 não encontrado no array.');
}

//__________________________________________________________________________________________________________