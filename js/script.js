document.addEventListener("DOMContentLoaded", function() {
    let operand1;
    let operator;
    let operand2;

    let calculator = new Calculator();
    
    console.log(calculator.operate(10, "+", 20));
    console.log(calculator.operate(10, "-", 20));
    console.log(calculator.operate(10, "*", 20));
    console.log(calculator.operate(10, "/", 20));
});
