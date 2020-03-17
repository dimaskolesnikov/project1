'use strict ';

let money = prompt("Введите ваш бюджет на месяц?", "");
let time = prompt('Введите дату в формате YYYY-MM-DD','');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: true
};

let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
    b = prompt('Во сколько обойдется', ''),
    c = prompt('Введите обязательную статью расходов в этом месяце', ''),
    d = prompt('Во сколько обойдется', '');

appData.expenses[a] = b;
appData.expenses[c] = d;

alert( appData.budget / 30);