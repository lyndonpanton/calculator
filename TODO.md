# TODO

## Description

## List

- [x] Evaluate one pair of numbers at a time
- [x] Round answers to 4 d.p.
- [x] Cannot press `=` before valid operation is entered
- [x] Pressing `clear` wipes display and data
- [x] User cannot divide by 0
- [x] User cannot enter consecutive operators

## Extra Credit

- [x] Users can enter floating point numbers
    - [x] Cannot enter `.` if display is empty
    - [x] Cannot enter `.` if last character in the equation is not a number
    - [x] Register if `.` has already been entered for the current operand
        - [x] Reset when operator is entered
        - [x] Reset when operation is evaluated (check if result has a decimal)
        - [x] Reset when display is cleared
    - [x] Restrict to four decimal places (use above logic)
        - [x] Reset when operator is entered
        - [x] Reset when operation is evaluated (check if result has a decimal)
        - [x] Reset when display is cleared
- [x] Add a functioning backspace button
    - [x] Is there anything to remove
    - [x] Is it an operand
    - [x] Is it a dot
    - [x] Is it a decimal number
- [x] Add keyboard support
- [x] After evaluation, trailing zeros are removed
- [x] Add a user interface
- [ ] Add an operation history
- [ ] Restrict non-decimal digit count similarly to how the decimal count was
restricted
- [ ] Application should work with negative numbers
    - [ ] User is able to start operand with `-`
    - [ ] Operations should not evaluate to `NaN`
- [ ] **After evaluation, display most recent operation as well as its result**
    - [Example #1](https://1michael17.github.io/calculator/)
    - [Example #2](https://haiderbey.github.io/odin-calculator/)
    - [ ] When the display is cleared, clear the operation as well as the result
- [ ] **Restyling calculator (buttons)**
    - [Example #1](https://1michael17.github.io/calculator/)
    - [Example #2](https://haiderbey.github.io/odin-calculator/)
    - [Example #3](https://rjrillon.github.io/calculator-project/)
- [ ] After a type of button (i.e., dot, digit, operator) has been disabled,
display that it has been disabled visually

## Bug
