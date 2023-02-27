// Observe o trecho de código abaixo:

//int INDICE = 13, SOMA = 0, K = 0;

//enquanto K < INDICE faça
//{
//K = K + 1;
//SOMA = SOMA + K;
//}

//imprimir(SOMA);

//Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
    k = k + 1 // ou k += 1, é uma sintaxe CleanCode, e a forma correta de usar.
    soma = soma + k //A forma correta, também seria soma += k.
}

console.log(soma);