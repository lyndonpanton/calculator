function clickOperation(calculator, operand) {
    let endsWithOperator =
            displayContent[displayContent.length - 1].match(/[\+\-\x\/\%]/) !== null;
    
    if (!endsWithOperator) {
        dotEntered = false;
        decimalCount = 0;
        
        if (isOperandDisplayed) {
            clickEquals(calculator);
        }
        
        if (displayContent !== "") {
            displayContent += operand;
        }
        
        populateDisplayResult(displayContent);
        isOperandDisplayed = true;

    } else {
        displayContent = displayContent.slice(0, displayContent.length - 1) + operand;
        populateDisplayResult(displayContent);
    }
}

function clickAdd(calculator) {
    if (displayContent !== "") {
        clickOperation(calculator, "+");
    }
}

function clickSubtract(calculator) {
    if (displayContent !== "") {
        clickOperation(calculator, "-");
    }
}

function clickMultiply(calculator) {
    if (displayContent !== "") {
        clickOperation(calculator, "x");
    }
}

function clickDivide(calculator) {
    if (displayContent !== "") {
        clickOperation(calculator, "/");
    }
}

function clickModulo(calculator) {
    if (displayContent !== "") {
        clickOperation(calculator, "%");
    }
}

function clickDecimal(calculator) {
    let finalCharacter = displayContent[displayContent.length - 1];

    if (displayContent !== "" && decimalCount < 4 && finalCharacter.match(/[0-9]/) !== null && !dotEntered) {
        displayContent += ".";
        populateDisplayResult(displayContent);

        dotEntered = true;
    }
}

function clickDigit(e) {
    let finalCharacter = displayContent[displayContent.length - 1];
    let value = (e.type === "keyup") ? e.key : e.target.textContent;
    
    if (!(finalCharacter === "/" && value === "0")) {
        if (decimalCount < 4) {
            displayContent += value;
            populateDisplayResult(displayContent);

            if (dotEntered) decimalCount += 1;
        }
    }
}

function clickEquals(calculator) {
    if (displayContent !== "") {
        let finalCharacter = displayContent[displayContent.length - 1];

        if (isOperandDisplayed && finalCharacter.match(/[0-9]/) !== null) {
            let operatorIndex = displayContent.match(/[\+\-\x\/\%]/).index;
            let operator = displayContent.match(/[\+\-\x\/\%]/)[0];
            let operand1 = parseFloat(displayContent.slice(0, operatorIndex));
            let operand2 = parseFloat(displayContent.slice(operatorIndex + 1));
            
            populateDisplayOperation(displayContent);
            displayContent = calculator.operate(operand1, operator, operand2).toFixed(4).toString();

            while (displayContent[displayContent.length - 1] === "0") {
                displayContent = displayContent.slice(0, displayContent.length - 1);
            }

            if (displayContent[displayContent.length - 1] === ".") {
                displayContent = displayContent.slice(0, displayContent.length - 1);
            }

            populateDisplayResult(displayContent);

            isOperandDisplayed = false;

            let dotIndex = displayContent.indexOf(".");

            if (dotIndex === -1) {
                dotEntered = false;
                decimalCount = 0;
            } else {
                // Calculate
                dotEntered = true;
                // decimalCount = 0; (get last index of dot)
                decimalCount = displayContent.length - (dotIndex + 1);
            }
        }
    }
}

function clickBackspace() {
    if (displayContent !== "") {
        let finalCharacter = displayContent[displayContent.length - 1];

        displayContent = displayContent.slice(0, displayContent.length - 1);
        populateDisplayResult(displayContent);

        if (finalCharacter.match(/[\+\-\x\/\%]/) !== null) {
            isOperandDisplayed = false;
        }
        
        if (finalCharacter === ".") {
            dotEntered = false;
            decimalCount = 0;
        }

        if (finalCharacter !== "." && dotEntered) {
            decimalCount -= 1;
        }
    }
}

function clickClear() {
    displayContent = "";
    populateDisplayResult(displayContent);
    populateDisplayOperation(displayContent);

    dotEntered = false;
    decimalCount = 0;
}

function populateDisplayOperation(content) {
    let displayOperation = document.querySelector("#calculator-display-operation");
    displayOperation.textContent = content;
}

function populateDisplayResult(content) {
    let displayResult = document.querySelector("#calculator-display-result");
    displayResult.textContent = content;
}

let displayContent = "";
let isOperandDisplayed = false;
let dotEntered = false;
let decimalCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    let calculator = new Calculator();

    let digitButtons = document.querySelectorAll(".calculator-digit");
    let decimalButton = document.querySelector("#calculator-decimal");
    let operatorButtons = document.querySelectorAll(".calculator-operator");
    let equalsButton = document.querySelector("#calculator-equals");
    let backspaceButton = document.querySelector("#calculator-backspace");
    let clearButton = document.querySelector("#calculator-clear");

    digitButtons.forEach(function(button) {
        button.addEventListener("click", clickDigit);
    });

    document.addEventListener("keyup", function (e) {
        switch (e.key) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                clickDigit(e);
                break;
            case ".":
                clickDecimal(calculator);
            case "+":
                clickAdd(calculator);
                break;
            case "-":
                clickSubtract(calculator);
                break;
            case "x":
            case "X":
            case "*":
                clickMultiply(calculator);
                break;
            case "/":
                clickDivide(calculator);
                break;
            case "%":
                clickModulo(calculator);
                break;
            case "=":
            case "Enter":
                clickEquals(calculator);
                break;
            case "c":
            case "C":
            case "Escape":
                clickClear();
                break;
            default:
                break;
        }
    });

    decimalButton.addEventListener("click", function () { clickDecimal(calculator) });
    
    operatorButtons.forEach(function (button) {
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
            case "%":
                button.addEventListener("click", function () { clickModulo(calculator) });
                break;
        }
    });

    equalsButton.addEventListener("click", function () { clickEquals(calculator) });
    backspaceButton.addEventListener("click", clickBackspace);
    clearButton.addEventListener("click", clickClear);
});
