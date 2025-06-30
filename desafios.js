//Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const esparso = [,1,,5,,,10];
console.log(esparso);
console.log(esparso.length);
//----------------------------------------------------------------------------------------------------------------------------
//Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const alteracao = [1, 2, 3, 4, 5];
console.log(alteracao);
alteracao[0] = 10;
console.log(alteracao); 

//----------------------------------------------------------------------------------------------------------------------------
//Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const meuArray = [];
meuArray.push(10);
meuArray.push(20);
meuArray.push(30);
console.log(meuArray);
meuArray[0] = meuArray[0] * 2;
console.log(meuArray);

//----------------------------------------------------------------------------------------------------------------------------
//Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.
const novoArray = [];
novoArray.push(5);
novoArray.push(15);
novoArray.push(25);
console.log(novoArray);

//----------------------------------------------------------------------------------------------------------------------------
// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
const clinica = [];
clinica.push("Gato", "Papagaio", "Cachorro");
console.log(clinica);
clinica.pop();
clinica.pop();
clinica.pop();
console.log(clinica);

//----------------------------------------------------------------------------------------------------------------------------

animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']
animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')
console.log(animaisDoAquario)

//----------------------------------------------------------------------------------------------------------------------------
//Crie uma função que receba dois arrays e os concatene em um único array.
function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); 

//----------------------------------------------------------------------------------------------------------------------------
//Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(2, 7);
console.log('Parte dos números: ', parteNumeros); 

//----------------------------------------------------------------------------------------------------------------------------
//Dado o array frutas contendo frutas que desejamos comprar na feira: const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas);

//----------------------------------------------------------------------------------------------------------------------------
//Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.
const menuPrincipal = ['Arroz', 'Feijão', 'Carne', 'Frango'];
const menuDeSobremesas = ['Bolo', 'Sorvete', 'Pudim'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log('Veja o menu completo:', menuCompleto );

//----------------------------------------------------------------------------------------------------------------------------
//Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

const matrizBidimensional = [];
for (let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(i * 3 + j + 1);
    }
    matrizBidimensional.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matrizBidimensional);
matrizBidimensional.forEach(row => console.log(row));

//----------------------------------------------------------------------------------------------------------------------------
//Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.
const elemento = matrizBidimensional[1][2];
console.log('Elemento na segunda linha e terceira coluna:', elemento);