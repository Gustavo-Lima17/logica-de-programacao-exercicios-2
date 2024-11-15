//  Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia = prompt('Qual é o dia da semana?');

if (dia == 'sabado'){
    alert('Bom fim de semana!')
}

    else if (dia == 'domingo'){
    alert('Bom fim de semana!')
}

    else{
    alert('Boa semana!')
};

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let numero = prompt('diga um numero');

if (numero >= 0){
    alert('o numero é posiitvo')
} else{
    alert('o numero é negativo')
};

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

alert('bem vindo ao jogos dos 100');

let pontuacao = prompt('diga um numero');

if(pontuacao >= 100){
    alert('Parabéns, você venceu!')
} else{
   alert('Tente novamente para ganhar.')
};

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = 200;
alert(`Seu saldo é de R$`+  [saldo]);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome_user = prompt ('qual é seu nome?')

alert('boas vindas senhor  ' +  [nome_user]   );

