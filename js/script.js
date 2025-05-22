function clickAdd(calculator) {
    // calculator.operate(10, "+", 20)
    displayContent += "+";
    populateDisplay("+");
}

function clickSubtract(calculator) {
    // calculator.operate(10, "-", 20)
    displayContent += "-";
    populateDisplay("-");
}

function clickMultiply(calculator) {
    // calculator.operate(10, "*", 20)
    displayContent += "*";
    populateDisplay("*");
}

function clickDivide(calculator) {
    // calculator.operate(10, "/", 20)
    displayContent += "/";
    populateDisplay("/");
}

function clickDigit(e) {
    displayContent += e.target.textContent;
    populateDisplay(e.target.textContent);
}

function populateDisplay(newContent) {
    let display = document.querySelector("#calculator-display");
    display.textContent += newContent;
}

let displayContent = "";

document.addEventListener("DOMContentLoaded", function() {
    let operand1;
    let operator;
    let operand2;

    let calculator = new Calculator();

    let digitButtons = document.querySelectorAll(".calculator-digit");
    let operatorButtons = document.querySelectorAll(".calculator-operator");

    digitButtons.forEach(function(button) {
        button.addEventListener("click", clickDigit);
    });
    
    operatorButtons.forEach(function(button) {
        switch (button.textContent) {
            case "+":
                button.addEventListener("click", function () { clickAdd(calculator) });
                break;
            case "-":
                button.addEventListener("click", function () { clickSubtract(calculator) });
                break;
            case "x":
                button.addEventListener("click", function () { clickMultiply(calculator) });
                break;
            case "/":
                button.addEventListener("click", function () { clickDivide(calculator) });
                break;
        }
    });
});
