function Calculator() {
    this.operations = {
        "+": function (a, b) { return a + b; },
        "-": function (a, b) { return a - b },
        "x": function (a, b) { return a * b },
        "/": function (a, b) { return a / b },
        "%": function (a, b) { return a % b }
    };
    this.operate = function (operand1, operator, operand2) {
        if (operator in this.operations) {
            console.log(operand1 + " " + operator + " " + operand2);
            return this.operations[operator](operand1, operand2);
        }
    }
}
