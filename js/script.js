// Получить кнопку "Начать расчет"
let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
	expensesItem = document.getElementsByClassName('expenses-item').disabled = true,
	expensesBtn = document.getElementsByTagName('button')[0].disabled = true,
	optionalExpensesBtn = document.getElementsByTagName('button')[1].disabled = true,
	countBtn = document.getElementsByTagName('button')[2].disabled = true,
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item').disabled = true,
	incomeItem = document.querySelector('.choose-income').disabled = true,
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum').disabled = true,
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

// blocksValue = document.querySelectorAll('[class$=value]'),
// savCheckbox = document.querySelector('.checksavings'),

let money, time;

startBtn.addEventListener('click', function () {
	time = prompt("Введите дату в формате YYYY-MM-DD", '');
	money = +prompt("Ваш бюджет на месяц ?", '');

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц ?", '');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;

		if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
			a != '' && b != '' && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', function () {

	if (appData.budget != undefined) {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка';
		} else {
			levelValue.textContent = 'Произошла ошибка';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

incomeItem.addEventListener('input', function () {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings == true) {
		let sum = +sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

// 1. Ты не правильно получил переменную
// 2. Не правильно указал значение disabled
// 3. Ошибка с
// if

if (appData.startBtn == true) {
	expensesBtn.disabled = false,
	optionalExpensesBtn.disabled = false,
	countBtn.disabled = false;	
} else {
	expensesBtn.disabled = true,
	optionalExpensesBtn.disabled = true,
	countBtn.disabled = true;
}


// var button = document.getElementById("Button");
// var clickBtn = document.getElementsByClassName('click')[0];

// // Disable the button on initial page load
// button.disabled = true;

// //add event listener
// clickBtn.addEventListener('click', function (event) {
// 	button.disabled = !button.disabled;
// });

// button.addEventListener('click', function (event) {
// 			alert('Enabled!');

// 			// Click to disable the button.
// document.getElementById("myBtn").disabled = true;

// 			// Set the disabled property:
// buttonObject.disabled = true | false