const numero1 = parseFloat(prompt("Insira o primeiro número: "));
const numero2 = parseFloat(prompt("Insira o segundo número: "));

let soma = numero1;
soma += numero2;

let sub = numero1;
sub -= numero2;

let multi = numero1;
multi *= numero2;

let divi = numero1;
divi /= numero2;

console.log(`A soma é: ${soma}
A subtração é: ${sub}
A multiplicação é: ${multi}
A divisão é: ${divi}`
);
