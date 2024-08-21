# Calculator Project

## Overview

This project is a simple web-based calculator designed for performing basic arithmetic operations. It provides a clean and intuitive user interface, allowing users to perform calculations easily. The calculator supports fundamental operations such as addition, subtraction, multiplication, and division, along with handling decimal numbers.

## Features

- **Basic Arithmetic Operations:** 
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)

- **Decimal Support:** Allows users to input and calculate with decimal numbers. Results are formatted to up to 6 decimal places for division operations.

- **History Tracking:** Maintains a history of user inputs and calculations, enabling users to navigate through previous expressions.

- **Keyboard Shortcuts:** Users can interact with the calculator using keyboard shortcuts for numbers, operators, and special functions.

- **Dynamic Display:** The calculator’s display updates dynamically with animations, providing a responsive and engaging user experience.

- **Clear Functionality:** Users can clear the entire expression with a single button click.

- **Result Calculation:** Computes the result of the expression and displays it immediately. If the expression is invalid, an error message is shown.

## Usage

1. **Input Numbers and Operators:**
   - Click on number buttons (0-9) to input digits.
   - Use operator buttons (+, -, *, /) to perform arithmetic operations.
   - Click the decimal button (.) to add a decimal point to the current number.

2. **Perform Calculations:**
   - Press the equal button (=) to calculate the result of the current expression.

3. **Clear the Expression:**
   - Click the clear button (C) to reset the expression and start fresh.

4. **Navigate History:**
   - Use keyboard shortcuts or buttons to navigate through previously entered expressions.

5. **Keyboard Shortcuts:**
   - Numbers and operators can be entered via the keyboard.
   - Press `Enter` to calculate, `Backspace` to clear the display, and `Escape` to reset.

## How It Works

- **Display:** The calculator displays the current expression and result. It updates in real-time as users input numbers and operators.
  
- **Input Handling:** Numbers and operators are appended to the expression. Decimal points are handled carefully to avoid incorrect inputs.

- **Calculation:** The `eval` function evaluates the mathematical expression. For division operations, results are formatted to up to 6 decimal places.

- **Error Handling:** Invalid expressions result in an error message displayed on the calculator.

- **Animations:** The display features animations for updates and interactions, enhancing the visual experience.

## Conclusion

This calculator project combines simplicity with functionality, providing an efficient tool for basic arithmetic calculations. Its user-friendly design and features make it an effective tool for both casual and more precise computational needs.
