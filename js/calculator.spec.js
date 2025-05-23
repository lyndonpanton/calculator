const Calculator = require("./calculator");
const calculator = new Calculator();

/*
    - Zero
    - Positve integer
    - Negative integer
    - Positive decimal
    - Negative decimal
*/

describe("addition", function () {
    test("3 + 9 -> 12", function () {
        expect(calculator.operate(3, "+", 9)).toEqual(12);
    });
    
    test("-23 + 8 -> -15", function () {
        expect(calculator.operate(-23, "+", 8)).toEqual(-15);
    });

    test("0 + -99 -> -99", function () {
        expect(calculator.operate(0, "+", -99)).toEqual(-99);
    });

    test("392.05 + -2.7 -> 389.35", function () {
        expect(calculator.operate(392.05, "+", -2.7)).toEqual(389.35);
    });

    test("-8653 + -0.0001 -> -8653.0001", function () {
        expect(calculator.operate(-8653, "+", -0.0001)).toEqual(-8653.0001);
    });
});

describe("subtraction", function () {
    test.skip("", function () {
        expect().toEqual();
    });
    
    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });
});

describe("multiplication", function () {
    test.skip("", function () {
        expect().toEqual();
    });
    
    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });
});

describe("divison", function () {
    test.skip("", function () {
        expect().toEqual();
    });
    
    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });
});

describe("remainder", function () {
    test.skip("", function () {
        expect().toEqual();
    });
    
    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });

    test.skip("", function () {
        expect().toEqual();
    });
});
