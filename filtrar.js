const alunos = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo', 'Fernanda', 'Gustavo', 'Helena', 'Igor', 'Juliana'];
const medias = [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 7.8, 5.2];
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;
});
console.log(reprovados);