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
        
        populateDisplay(displayContent);
        isOperandDisplayed = true;

    } else {
        displayContent = displayContent.slice(0, displayContent.length - 1) + operand;
        populateDisplay(displayContent);
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

    if (displayContent !== "" && decimalCount < 4 && finalCharacter.match(/[0-9]/) !== null) {
        displayContent += ".";
        populateDisplay(displayContent);

        dotEntered = true;
    }
}

function clickDigit(e) {
    let finalCharacter = displayContent[displayContent.length - 1];

    if (!(finalCharacter === "/" && e.target.textContent == "0")) {
        if (decimalCount < 4) {
            displayContent += e.target.textContent;
            populateDisplay(displayContent);

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
            
            displayContent = calculator.operate(operand1, operator, operand2).toFixed(4).toString();
            populateDisplay(displayContent);

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

            console.log(dotEntered);
            console.log(decimalCount);
        }
    }
}

function clickClear() {
    displayContent = "";
    populateDisplay(displayContent);

    dotEntered = false;
    decimalCount = 0;
}

function populateDisplay(content) {
    let display = document.querySelector("#calculator-display");
    display.textContent = content;
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
    let clearButton = document.querySelector("#calculator-clear");

    digitButtons.forEach(function(button) {
        button.addEventListener("click", clickDigit);
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
    clearButton.addEventListener("click", clickClear);
});
