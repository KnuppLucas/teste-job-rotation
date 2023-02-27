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


/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na 
linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser 
ignorados no cálculo da média;


4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada 
estado teve dentro do valor total mensal da distribuidora.
 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser 
previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;


NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU */
