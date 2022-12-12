// **PROJETO WEB - CONTAS**

// --------------------- SEMANA 1 - CADASTRO DE CONTAS
// Variáveis iniciais.
const nameAccount1 = "Gasolina";
const priceAccount1 = 150;
const isPaid1 = true;

const nameAccount2 = "Internet";
const priceAccount2 = 70;
const isPaid2 = true;

const nameAccount3 = "Aluguel";
const priceAccount3 = 700;
const isPaid3 = false;

// Média das contas.
let sumPriceAccounts = priceAccount1 + priceAccount2 + priceAccount3;
let amountAccounts = 3;
const averagePrice = sumPriceAccounts / amountAccounts;
console.log("Média dos valores: R$", averagePrice);

// Verificando se as contas foram pagas.
const checkPayment = isPaid1 && isPaid2 && isPaid3;
console.log("Todas as contas foram pagas?", checkPayment);

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
    nameAccount: 'Cartão',
    priceAccount: 150,
    isPaid: true,
    paymentDate: ['20/05/2022', '19/05/2022'], // Primeira data é vencimento, segunda é pagamento.
    image: './media/cartao.jpg',
    link: 'https://www.google.com.br/',
    report: ['']
}
const account2 = {
    nameAccount: 'Internet',
    priceAccount: 100,
    isPaid: true,
    paymentDate: ['17/03/2022', '14/03/2022'],
    image: './media/internet.jpg',
    link: 'https://www.google.com.br/',
    report: ['']
}
const account3 = {
    nameAccount: 'Aluguel',
    priceAccount: 700,
    isPaid: false,
    paymentDate: ['23/01/2022'],
    image: './media/aluguel.jpg',
    link: 'https://www.google.com.br/',
    report: ['']
}
const account4 = {
    nameAccount: 'Empréstimo',
    priceAccount: 700,
    isPaid: false,
    paymentDate: ['23/01/2022'],
    image: './media/emprestimo.jpg',
    link: 'https://www.google.com.br/',
    report: ['']
}
const account5 = {
    nameAccount: 'Automóvel',
    priceAccount: 700,
    isPaid: false,
    paymentDate: ['23/01/2022'],
    image: './media/automovel.jpg',
    link: 'https://www.google.com.br/',
    report: ['']
}

// // Adicionando os objetos em um array.
// const arrayObject = [];
// arrayObject.push(account1);
// arrayObject.push(account2);
// arrayObject.push(account3);
// console.log(arrayObject);

// --------------------- SEMANA 4 - CADASTRO DE CONTAS
// Adicionando os objetos em um array pela condicional.
const arrayObjectAccountsPaids = [];
const arrayObjectAccountsNotPaids = [];

if (account1.isPaid) {
    arrayObjectAccountsPaids.push(account1);
} else {
    arrayObjectAccountsNotPaids.push(account1);
    // alert(`Atenção! A conta ${account1.nameAccount} não foi paga`);
}

if (account2.isPaid) {
    arrayObjectAccountsPaids.push(account2);
} else {
    arrayObjectAccountsNotPaids.push(account2);
    // alert(`Atenção! A conta ${account2.nameAccount} não foi paga`);
}

if (account3.isPaid) {
    arrayObjectAccountsPaids.push(account3);
} else {
    arrayObjectAccountsNotPaids.push(account3);
    // alert(`Atenção! A conta ${account3.nameAccount} não foi paga`);
}

if (account4.isPaid) {
    arrayObjectAccountsPaids.push(account4);
} else {
    arrayObjectAccountsNotPaids.push(account4);
    // alert(`Atenção! A conta ${account4.nameAccount} não foi paga`);
}

if (account5.isPaid) {
    arrayObjectAccountsPaids.push(account5);
} else {
    arrayObjectAccountsNotPaids.push(account5);
    // alert(`Atenção! A conta ${account4.nameAccount} não foi paga`);
}

// console.log(arrayObjectAccountsPaids);

// --------------------- SEMANA 5 - CADASTRO DE CONTAS

console.log('RELATÓRIO DE CONTAS PAGAS')
for (let i in arrayObjectAccountsPaids) {
    arrayObjectAccountsPaids[i].report = (`Conta ${Number(i)+1}: 
    Nome: ${arrayObjectAccountsPaids[i].nameAccount.toUpperCase()}
    Valor: R$ ${arrayObjectAccountsPaids[i].priceAccount}
    Data Vencimento: ${arrayObjectAccountsPaids[i].paymentDate[0]}
    Data Pagamento: ${arrayObjectAccountsPaids[i].paymentDate[1]}`)   
    console.log(arrayObjectAccountsPaids[i].report);
}

console.log('RELATÓRIO DE CONTAS NÃO PAGAS')
for (let i in arrayObjectAccountsNotPaids) {
    arrayObjectAccountsNotPaids[i].report = (`Conta ${Number(i)+1}: 
    Nome: ${arrayObjectAccountsNotPaids[i].nameAccount.toUpperCase()}
    Valor: R$ ${arrayObjectAccountsNotPaids[i].priceAccount}
    Data Vencimento: ${arrayObjectAccountsNotPaids[i].paymentDate[0]}`)
    console.log(arrayObjectAccountsNotPaids[i].report);
}

// --------------------- SEMANA 6 - CADASTRO DE CONTAS
// const objReports = (obj)=>{
//     return obj.report
// }
// console.log(objReports(account5));

// const objReturn = (arrayObj, arrayObj2, string)=>{
//     let obj = []
//     for(let i in arrayObj){  
//         if(arrayObj[i].nameAccount.toUpperCase() === string.toUpperCase()){
//             obj.push(arrayObj[i])
//         }
//     }
//     for(let i in arrayObj2){  
//         if(arrayObj2[i].nameAccount.toUpperCase() === string.toUpperCase()){
//             obj.push(arrayObj2[i])
//         }
//     }
//     if(obj.length > 0){
//         return obj
//     } else {
//         return alert('Item não encontrado!')
//     }
// }

// let stringFilter = 'aluguel'
// console.log(objReturn(arrayObjectAccountsPaids, arrayObjectAccountsNotPaids, stringFilter));

// --------------------- SEMANA 11 - CADASTRO DE CONTAS

function createListNotPaid(arrayNotPaids){
    const itens = document.getElementById('account-not-paids');
    itens.innerHTML = '<h3>Contas Não Pagas</h3>';
    
    for(let i of arrayNotPaids){
        itens.innerHTML += `
        <section class="not-paids">
            <img class="figure-accounts" src="${i.image}" alt="">
            <ul>
                <li><a href = '${i.link}' target= 'blank'><h1>${i.nameAccount}</h1></a></li>
                <li>Valor: R$: ${i.priceAccount}</li>
                <li>Data de Vencimento: ${i.paymentDate[0]}</li>
            </ul>
        </section>
        `
    }
}

createListNotPaid(arrayObjectAccountsNotPaids);

function createListPaid(arrayPaids){
    const itens = document.getElementById('account-paids');
    itens.innerHTML = '<h3>Contas Pagas</h3>';
    
    for(let i of arrayPaids){
        itens.innerHTML += `
        <section class="paids">
        <img class="figure-accounts" src="${i.image}" alt="">
                <ul>
                    <li><a href = '${i.link}' target= 'blank'><h1>${i.nameAccount}</h1></a></li>
                    <li>Valor: R$: ${i.priceAccount}</li>
                    <li>Data de Vencimento: ${i.paymentDate[0]}</li>
                    <li>Data de Pagamento: ${i.paymentDate[1]}</li>
                </ul>
        </section>
        `
    }
}

createListPaid(arrayObjectAccountsPaids);

// --------------------- SEMANA 12 - CADASTRO DE CONTAS

function createListEmpty (){
    const itens = document.getElementById('account-paids');
    return itens.innerHTML = '';
}

function searchAccount () {
    const input = document.getElementById('search-txt');
    const accountNotPaid = accountNotPaidFound(input);
    const accountPaid = accountPaidFound(input);

    if(accountNotPaid !== arrayObjectAccountsNotPaids && accountPaid !== arrayObjectAccountsPaids){
        createListNotPaid(accountNotPaid);
        createListPaid(accountPaid);
    } else if(accountNotPaid !== arrayObjectAccountsNotPaids || accountPaid !== arrayObjectAccountsPaids){
        if (accountNotPaid !== arrayObjectAccountsNotPaids){
            createListNotPaid(accountNotPaid);
            createListPaid(createListEmpty ());
        } else if(accountPaid !== arrayObjectAccountsPaids){
            createListNotPaid(createListEmpty ());
            createListPaid(accountPaid);
        }    
    } else {
        alert ('Esta conta não foi encontrada!');
        createListNotPaid(accountNotPaid);
        createListPaid(accountPaid);
    }
}

function accountNotPaidFound (input) {
    const accountNotPaid = arrayObjectAccountsNotPaids.filter((acc) => {
        return acc.nameAccount.toUpperCase() === input.value.toUpperCase()
    })

    if(accountNotPaid.length > 0){
        return accountNotPaid;
    } else {
        return arrayObjectAccountsNotPaids;
    }
}

function accountPaidFound (input) {
    const accountPaid = arrayObjectAccountsPaids.filter((acc) => {
        return acc.nameAccount.toUpperCase() === input.value.toUpperCase()
    })

    if(accountPaid.length >= 1){
        return accountPaid;
    } else {
        return arrayObjectAccountsPaids;
    }
}