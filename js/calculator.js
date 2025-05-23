function Calculator() {
    this.operations = {
        "+": function (a, b) { return a + b; },
        "-": function (a, b) { return a - b },
        "*": function (a, b) { return a * b },
        "/": function (a, b) { return a / b },
        "%": function (a, b) { return a % b }
    };
    this.operate = function (operand1, operator, operand2) {
        if (operator in this.operations) {
            return this.operations[operator](operand1, operand2);
        }
    }
}
