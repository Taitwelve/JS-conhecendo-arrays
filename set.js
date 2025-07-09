const nomes = ['Ana', 'Bia', 'Carlos', 'Daniel', 'Daniel','Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Igor','Fernanda', 'Joana'];

const nomesAtualizados = new Set(nomes);
// const listaNomesAtualizados = [...nomesAtualizados]
const listaNomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);