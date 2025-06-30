const aluno = ['João', 'Maria', 'Pedro', 'Ana'];
const medias = [7.5, 8.0, 6.5, 9.0];

const lista = [aluno, medias];

function exibeNomeENota (aluno) {
    if (lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`O(a) aluno(a) ${aluno} tem média ${mediaAluno}`);
    } else {
        console.log(`O(a) aluno(a) ${aluno} não foi encontrado.`);
    }
}

exibeNomeENota('Maria');
exibeNomeENota('Carlos');
exibeNomeENota('Ana');
exibeNomeENota('João');
exibeNomeENota('Pedro');
exibeNomeENota('Lucas');
