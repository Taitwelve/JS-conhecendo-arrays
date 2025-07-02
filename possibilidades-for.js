const numeros = [100, 200, 300, 400, 500, 600];
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(numeros[i]);
}

const numero = [100, 200, 300, 400, 500, 600];
for (let i = numero.length - 1; i >= 0; i -= 2) {
    console.log(numero[i]);
}

const numeroz = [100, 200, 300, 400, 500, 600];
for (let i = numeroz.length - 1; numeroz[i] >= 300; i -= 2) {
    console.log(numeroz[i]);
}

const numerosPares = [];
for (let i = 0; i <= 100; i += 2) {
    numerosPares.push(i);
}
console.log(numerosPares);