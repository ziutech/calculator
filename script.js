const operate = (a, b, operator) => {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "\u00D7":
			return a * b;
		case "\u00F7":
			return a / b;
	}
};

const display = document.querySelector(".output");

let acc = null;
let value = null;
let sign = null;

document.querySelector(".clear").addEventListener("click", () => {
	display.textContent = 0;
	acc = null;
	value = null;
	sign = null;
});

const logValues = () => console.log(acc, sign, value);

const numbers = [...document.querySelectorAll(".number")];
numbers.forEach((number) => {
	number.addEventListener("click", () => {
		if (value === null || display.textContent == 0)
			display.textContent = number.textContent;
		else display.textContent += number.textContent;

		if (!sign) acc = Number(display.textContent);
		else value = Number(display.textContent);

		logValues();
	});
});

const operators = [...document.querySelectorAll(".operator")];
operators.forEach((operator) => {
	operator.addEventListener("click", () => {
		if (acc) {
			if (!sign) {
				sign = operator.textContent;
				display.textContent = 0;
				logValues();
			} else {
				acc = operate(acc, value, sign);
				display.textContent = acc;
				value = null;
				logValues();
				sign = operator.textContent;
			}
		}
	});
});

document.querySelector(".equals").addEventListener("click", () => {
	logValues();
	if (acc !== null && sign !== null && value !== null) {
		acc = operate(acc, value, sign);
		display.textContent = acc;
		sign = null;
		value = null;
		acc = null;
		logValues();
	}
});
