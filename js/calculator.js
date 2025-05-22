function Calcultor() {
    this.methods = {
        "+": function (a, b) { return a + b; },
        "-": function (a, b) { return a - b },
        "*": function (a, b) { return a * b },
        "/": function (a, b) { return a / b }
    };
}

module.exports = Calcultor;
