function clickAdd(calculator, operands) {
    if (!isOperandDisplayed) {
        displayContent += "+";
        populateDisplay(displayContent);
        updateOperands(operands, "+");
        isOperandDisplayed = true;
    }
}

function clickSubtract(calculator, operands) {
    if (!isOperandDisplayed) {
        displayContent += "-";
        populateDisplay(displayContent);
        updateOperands(operands, "-");
        isOperandDisplayed = true;
    }
}

function clickMultiply(calculator, operands) {
    if (!isOperandDisplayed) {
        displayContent += "x";
        populateDisplay(displayContent);
        updateOperands(operands, "x");
        isOperandDisplayed = true;
    }
}

function clickDivide(calculator, operands) {
    if (!isOperandDisplayed) {
        displayContent += "/";
        populateDisplay(displayContent);
        updateOperands(operands, "/");
        isOperandDisplayed = true;
    }
}

function clickModulo(calculator, operands) {
    if (!isOperandDisplayed) {
        displayContent += "%";
        populateDisplay(displayContent);
        updateOperands(operands, "%");
        isOperandDisplayed = true;
    }
}

function clickDigit(e) {
    displayContent += e.target.textContent;
    populateDisplay(displayContent);
}

function clickEquals(calculator) {
    let operatorIndex = displayContent.match(/[\+\-\x\/]/).index;
    let operator = displayContent.match(/[\+\-\x\/]/)[0];
    let operand1 = parseInt(displayContent.slice(0, operatorIndex));
    let operand2 = parseInt(displayContent.slice(operatorIndex + 1));
    
    displayContent = calculator.operate(operand1, operator, operand2);
    populateDisplay(displayContent);
    
    isOperandDisplayed = false;
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
    
}

let displayContent = "";
let isOperandDisplayed = false;

document.addEventListener("DOMContentLoaded", function() {
    let operands = {
        "one": "",
        "two": ""
    };

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
            case "%":
                button.addEventListener("click", function () { clickModulo(calculator, operands) });
                break;
        }
    });

    equalsButton.addEventListener("click", function() { clickEquals(calculator) });
    clearButton.addEventListener("click", clickClear);
});
