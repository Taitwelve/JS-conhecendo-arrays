const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];

const numeros = [...numerosPares, ...numerosImpares];

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pessoa = { nome: 'Tai', idade: 29, cidade: 'São Paulo' };
const pessoaComTelefone = { ...pessoa, telefone: '1234-5678' };
const { idade } = pessoa;
function imprimeDados({ nome, idade, cidade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}
imprimeDados(pessoa);



