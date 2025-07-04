const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);

//_____________________________________________________________________________________________

const numeros = [43, 50, 65, 12]
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
console.log(soma)