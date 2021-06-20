const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (a, b, operator) => {
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '&#215':
            return multiply(a, b);
        case '&#247':
            return divide(a, b);
    }
};

const display = document.querySelector(".output");
const numbers = [...document.querySelectorAll(".number")];

let acc = 0;
let value = 0;

document.querySelector(".clear").addEventListener('click', () => {
    display.textContent = 0;
    acc = 0;
    value = 0;
});

numbers.forEach( (number) => {
    number.addEventListener('click', () => {
        if(display.textContent == 0)
            display.textContent = number.textContent;
        else
            display.textContent += number.textContent;
        value = display.textContent;
    });
});

