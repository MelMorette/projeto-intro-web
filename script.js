// **PROJETO WEB - CONTAS**

// --------------------- SEMANA 1 - CADASTRO DE CONTAS

// // Variáveis iniciais.
// const nameAccount1 = "Gasolina";
// const priceAccount1 = 150;
// const isPaid1 = true;

// const nameAccount2 = "Internet";
// const priceAccount2 = 70;
// const isPaid2 = true;

// const nameAccount3 = "Aluguel";
// const priceAccount3 = 700;
// const isPaid3 = false;

// // Média das contas.
// let sumPriceAccounts = priceAccount1 + priceAccount2 + priceAccount3;
// let amountAccounts = 3;
// const averagePrice = sumPriceAccounts / amountAccounts;
// console.log("Média dos valores: R$", averagePrice);

// // Verificando se as contas foram pagas.
// const checkPayment = isPaid1 && isPaid2 && isPaid3;
// console.log("Todas as contas foram pagas?", checkPayment);

// --------------------- SEMANA 2 - CADASTRO DE CONTAS

// // Adicionando mais variáveis.
// const date1 = ['20/05/2022', '19/05/2022'];
// const date2 = ['17/03/2022', '14/03/2022'];
// const date3 = ['23/01/2022'];

// // Relatório de todos os valores.
// console.log(`Primeira conta: 
// \n${nameAccount1.toUpperCase()}
// Valor: R$ ${priceAccount1}
// Está pago? ${isPaid1}
// Vencimento/Pagamento: ${date1}`);

// console.log(`Segunda conta: 
// \n${nameAccount2.toUpperCase()}
// Valor: R$ ${priceAccount2}
// Está pago? ${isPaid2}
// Vencimento/Pagamento: ${date2}`);

// console.log(`Terceira conta: 
// \n${nameAccount3.toUpperCase()}
// Valor: R$ ${priceAccount3}
// Está pago? ${isPaid3}
// Vencimento/Pagamento: ${date3}`);

// --------------------- SEMANA 3 - CADASTRO DE CONTAS

// Transformando em objetos.
const account1 = {
    nameAccount: 'Gasolina',
    priceAccount: 150,
    isPaid: true,
    paymentDate: ['20/05/2022', '19/05/2022'] // Primeira data é vencimento, segunda é pagamento.
}
const account2 = {
    nameAccount: 'Internet',
    priceAccount: 70,
    isPaid: true,
    paymentDate: ['17/03/2022', '14/03/2022']
}
const account3 = {
    nameAccount: 'Aluguel',
    priceAccount: 700,
    isPaid: false,
    paymentDate: ['23/01/2022','00/00/0000']
}

// // Adicionando os objetos em um array.
// const arrayObject = [];
// arrayObject.push({ account1 });
// arrayObject.push({ account2 });
// arrayObject.push({ account3 });
// console.log(arrayObject);

// --------------------- SEMANA 4 - CADASTRO DE CONTAS

// Adicionando os objetos em um array pela condicional.
const arrayObjectAccountsPaids = [];
const arrayObjectAccountsNotPaids = [];

if (account1.isPaid) {
    arrayObjectAccountsPaids.push(account1);
} else {
    arrayObjectAccountsNotPaids.push(account1);
    alert(`Atenção! A conta ${account1.nameAccount} não foi paga`);
}

if (account2.isPaid) {
    arrayObjectAccountsPaids.push(account2);
} else {
    arrayObjectAccountsNotPaids.push(account2);
    alert(`Atenção! A conta ${account2.nameAccount} não foi paga`);
}

if (account3.isPaid) {
    arrayObjectAccountsPaids.push(account3);
} else {
    arrayObjectAccountsNotPaids.push(account3);
    alert(`Atenção! A conta ${account3.nameAccount} não foi paga`);
}

// console.log(arrayObjectAccountsPaids);

// --------------------- SEMANA 5 - CADASTRO DE CONTAS
// console.log('RELATÓRIO DE CONTAS PAGAS')
// for (let i = 0; i < arrayObjectAccountsPaids.length; i++) {
//     let arrayStringPaids = (`Conta ${i+1}: 
//     Nome: ${arrayObjectAccountsPaids[i].nameAccount.toUpperCase()}
//     Valor: R$ ${arrayObjectAccountsPaids[i].priceAccount}
//     Data Vencimento: ${arrayObjectAccountsPaids[i].paymentDate[i]}
//     Data Pagamento: ${arrayObjectAccountsPaids[i].paymentDate[i+1]}`)
    
//     console.log(arrayStringPaids);
// }

// console.log('RELATÓRIO DE CONTAS NÃO PAGAS')
// for (let i = 0; i < arrayObjectAccountsNotPaids.length; i++) {
//     let arrayStringNotPaids = (`Conta ${i+1}: 
//     Nome: ${arrayObjectAccountsNotPaids[i].nameAccount.toUpperCase()}
//     Valor: R$ ${arrayObjectAccountsNotPaids[i].priceAccount}
//     Data Vencimento: ${arrayObjectAccountsNotPaids[i].paymentDate[i]}
//     Data Pagamento: ${arrayObjectAccountsNotPaids[i].paymentDate[i+1]}`)

//     console.log(arrayStringNotPaids);
// }

console.log('RELATÓRIO DE CONTAS PAGAS')
for (let i in arrayObjectAccountsPaids) {
    let arrayStringPaids = (`Conta ${i+1}: 
    Nome: ${arrayObjectAccountsPaids[i].nameAccount.toUpperCase()}
    Valor: R$ ${arrayObjectAccountsPaids[i].priceAccount}
    Data Vencimento: ${arrayObjectAccountsPaids[i].paymentDate[i]}
    Data Pagamento: ${arrayObjectAccountsPaids[i].paymentDate[i+1]}`)
    
    console.log(arrayStringPaids);
}

console.log('RELATÓRIO DE CONTAS NÃO PAGAS')
for (let i in arrayStringNotPaids) {
    let arrayStringNotPaids = (`Conta ${i+1}: 
    Nome: ${arrayObjectAccountsNotPaids[i].nameAccount.toUpperCase()}
    Valor: R$ ${arrayObjectAccountsNotPaids[i].priceAccount}
    Data Vencimento: ${arrayObjectAccountsNotPaids[i].paymentDate[i]}
    Data Pagamento: ${arrayObjectAccountsNotPaids[i].paymentDate[i+1]}`)

    console.log(arrayStringNotPaids);
}