// **PROJETO WEB - CONTAS À PAGAR**

// --------------------- SEMANA 1 - CADASTRO DE CONTAS À PAGAR
const nameAccount1 = "Gasolina";
const priceAccount1 = 150;
const isPaid1 = true;

const nameAccount2 = "Internet";
const priceAccount2 = 70;
const isPaid2 = true;

const nameAccount3 = "Aluguel";
const priceAccount3 = 700;
const isPaid3 = false;

// Média das contas à pagar.
let sumPriceAccounts = priceAccount1 + priceAccount2 + priceAccount3;
let amountAccounts = 3;
const averagePrice = sumPriceAccounts / amountAccounts;
console.log("Média dos valores: R$", averagePrice);

// Verificando se as contas foram pagas.
const checkPayment = isPaid1 && isPaid2 && isPaid3;
console.log("Todas as contas foram pagas?", checkPayment);

// --------------------- SEMANA 2 - CADASTRO DE CONTAS À PAGAR

// Adicionando mais variáveis.
const date1 = ['20/05/2022', '19/05/2022'];
const date2 = ['17/03/2022', '14/03/2022'];
const date3 = ['23/01/2022'];

// Relatório de todos os valores.
console.log(`Primeira conta: 
\n${nameAccount1.toUpperCase()}
Valor: R$ ${priceAccount1}
Está pago? ${isPaid1}
Vencimento/Pagamento: ${date1}`);

console.log(`Segunda conta: 
\n${nameAccount2.toUpperCase()}
Valor: R$ ${priceAccount2}
Está pago? ${isPaid2}
Vencimento/Pagamento: ${date2}`);

console.log(`Terceira conta: 
\n${nameAccount3.toUpperCase()}
Valor: R$ ${priceAccount3}
Está pago? ${isPaid3}
Vencimento/Pagamento: ${date3}`);

// --------------------- SEMANA 3 - CADASTRO DE CONTAS À PAGAR

account1 = {
    nameAccount: "Gasolina",
    priceAccount: 150,
    isPaid: true
}

account2 = {
    nameAccount: "Internet",
    priceAccount: 70,
    isPaid: true
}

account3 = {
    nameAccount: "Aluguel",
    priceAccount: 700,
    isPaid: false
}

const arrayObject = [];
arrayObject.push({ account1 });
arrayObject.push({ account2 });
arrayObject.push({ account3 });
console.log(arrayObject);

// --------------------- SEMANA 4 - CADASTRO DE CONTAS À PAGAR