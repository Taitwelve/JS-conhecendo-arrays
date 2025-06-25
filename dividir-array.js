const listaEstudantes = ['João', 'Maria', 'Pedro', 'Ana', 'Lucas', 'Carla', 'Rafael', 'Fernanda', 'Gustavo', 'Sofia', 'Felipe', 'Isabela', 'Thiago', 'Camila', 'Roberto', 'Larissa', 'Eduardo', 'Patrícia', 'Bruno', 'Juliana'];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log('Sala 1:', sala1);
console.log('Sala 2:', sala2);  