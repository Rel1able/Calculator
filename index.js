function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    return (num1 - num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

let firstNumber = "";
let operator = "";
let secondNumber = "";

function operate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            if (num2 === 0) {
                return "You can'd divide by 0.";
            }
            result = divide(num1, num2);
            break;
        default:
            result = null;
    }
    return result !== null ? Math.round(result * 100) / 100 : null;
}

let buttons = document.querySelectorAll("#key");
let display = document.querySelector(".display");
let currentNumber = "";
let numbers = document.querySelectorAll(".number, .dot");
let operators = document.querySelectorAll(".operator");


numbers.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.textContent === "." && currentNumber.includes(".")) {
            return;
        }
        currentNumber += event.target.textContent;
        display.textContent = currentNumber;
    })
})



operators.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.textContent === "=") {
            secondNumber = currentNumber;
            display.textContent = operate(firstNumber, operator, secondNumber);
            firstNumber = display.textContent;
            currentNumber = "";
        } else if (event.target.textContent === "C") {
            firstNumber = "";
            operator = "";
            secondNumber = "";
            currentNumber = "";
            display.textContent = "0";
        } else if (event.target.textContent === "X") {
            currentNumber = currentNumber.slice(0, -1);
            display.textContent = currentNumber || "0";
        } else {
            firstNumber = currentNumber;
            operator = event.target.textContent;
            currentNumber = "";
            display.textContent = "";
        }
    });
});




