function clickAdd(calculator, operands) {
    // calculator.operate(10, "+", 20)
    displayContent += "+";
    populateDisplay(displayContent);
    updateOperands(operands, "+");
}

function clickSubtract(calculator, operands) {
    // calculator.operate(10, "-", 20)
    displayContent += "-";
    populateDisplay(displayContent);
    updateOperands(operands, "-");
}

function clickMultiply(calculator, operands) {
    // calculator.operate(10, "*", 20)
    displayContent += "*";
    populateDisplay(displayContent);
    updateOperands(operands, "/");
}

function clickDivide(calculator, operands) {
    // calculator.operate(10, "/", 20)
    displayContent += "/";
    populateDisplay(displayContent);
    updateOperands(operands, "/");
}

function clickDigit(e) {
    displayContent += e.target.textContent;
    populateDisplay(displayContent);
}

function clickEquals() {
    let a = displayContent.search(/\+|\-|\*|\//);
    console.log(a);
}

function clickClear() {
    displayContent = "";
    populateDisplay(displayContent);
}

function populateDisplay(content) {
    let display = document.querySelector("#calculator-display");
    display.textContent = content;
}

function updateOperands(operands, operand) {
    if (operands["one"] == "") {
        operands["one"] = operand;
    } else {
        operands["two"] = operand;
    }
}

let displayContent = "";

document.addEventListener("DOMContentLoaded", function() {
    let operands = {
        "one": "",
        "two": ""
    };

    let operator = "";

    let calculator = new Calculator();

    let digitButtons = document.querySelectorAll(".calculator-digit");
    let operatorButtons = document.querySelectorAll(".calculator-operator");
    let equalsButton = document.querySelector("#calculator-equals");
    let clearButton = document.querySelector("#calculator-clear");

    digitButtons.forEach(function(button) {
        button.addEventListener("click", clickDigit);
    });
    
    operatorButtons.forEach(function(button) {
        switch (button.textContent) {
            case "+":
                button.addEventListener("click", function () { clickAdd(calculator, operands) });
                break;
            case "-":
                button.addEventListener("click", function () { clickSubtract(calculator, operands) });
                break;
            case "x":
                button.addEventListener("click", function () { clickMultiply(calculator, operands) });
                break;
            case "/":
                button.addEventListener("click", function () { clickDivide(calculator, operands) });
                break;
        }
    });

    equalsButton.addEventListener("click", clickEquals);
    clearButton.addEventListener("click", clickClear);
});
