const nome = "Alura";
console.log(nome);
console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());

let nomeMaiusculas = "";
for (let i = 0; i < nome.length; i++) {
  nomeMaiusculas += nome[i].toUpperCase();
}
console.log(nomeMaiusculas); 

//________________________________________________________________________________________________________

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)