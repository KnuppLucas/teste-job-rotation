/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que 
desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente 
definido no código; */

// Função para calcular a sequência de Fibonacci
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
      sequence[i] = sequence[i-1] + sequence[i-2];
    }
    console.log(sequence);
    return sequence;
  }
  
  // Recebe o número informado pelo usuário
  //let numero = parseInt(prompt("Digite um número:")); para perguntar em uma página web
  let numero = 10 //Definição no código.
  
  // Calcula a sequência de Fibonacci com o número informado
  let sequencia = fibonacci(numero);
  
  // Verifica se o número informado pertence à sequência de Fibonacci
  if (sequencia.includes(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }
