let expression = ""; // Store the entire expression
let history = []; // To keep track of the expression history for undo/redo
let historyIndex = -1; // Index to track the current position in history

// Function to briefly highlight the display input
function highlightDisplay() {
    const display = document.getElementById("result");
    display.classList.add("active"); // Add the active class to trigger styling
    setTimeout(() => display.classList.remove("active"), 200); // Remove the class after 200ms
}

// Function to animate the display update
function animateUpdate() {
    const display = document.getElementById("result");
    display.classList.add("update"); // Add the update class to trigger animation
    setTimeout(() => display.classList.remove("update"), 300); // Remove the class after 300ms
}

// Function to append a number to the expression
function appendNumber(number) {
    expression += number; // Add the number to the expression
    updateDisplay(); // Update the display with the new expression
    highlightDisplay(); // Highlight the display
    saveState(); // Save the current state in history
    removeActiveOperator(); // Remove highlight from the previously active operator
}

// Function to append an operator to the expression
function appendOperator(op) {
    if (expression === "" && op !== "-") return; // Prevent operators at the start, except for minus
    if (isLastCharOperator()) return; // Prevent multiple operators in a row
    expression += op; // Add the operator to the expression
    updateDisplay(); // Update the display with the new expression
    highlightDisplay(); // Highlight the display
    saveState(); // Save the current state in history
    highlightOperator(op); // Highlight the selected operator
}

// Function to append a decimal point to the expression
function appendDecimal() {
    if (isLastCharOperator()) return; // Prevent decimal directly after an operator
    expression += "."; // Add the decimal point to the expression
    updateDisplay(); // Update the display with the new expression
    highlightDisplay(); // Highlight the display
    saveState(); // Save the current state in history
}

// Function to clear the display and reset the expression
function clearDisplay() {
    expression = ""; // Reset the expression
    updateDisplay(); // Clear the display
    highlightDisplay(); // Highlight the display
    saveState(); // Save the cleared state in history
    removeActiveOperator(); // Remove highlight from the previously active operator
}

// Function to update the display with the current expression
function updateDisplay() {
    document.getElementById("result").value = expression; // Set the display value to the current expression
    animateUpdate(); // Animate the display update
}

// Function to calculate the result of the expression
function calculate() {
    try {
        // Safely evaluate the expression
        let result = eval(expression);

        // Format the result to 6 decimal places if it's a division
        if (expression.includes("/")) {
            result = parseFloat(result).toFixed(6); // Format result to 6 decimal places
        }

        expression = result.toString(); // Update the expression with the result
        updateDisplay(); // Update the display with the result
        saveState(); // Save the result in history
        removeActiveOperator(); // Remove highlight from the previously active operator
    } catch (error) {
        expression = "Error"; // Display error if the expression is invalid
        updateDisplay(); // Update the display with the error message
    }
}

// Function to check if the last character in the expression is an operator
function isLastCharOperator() {
    return /[+\-*/]$/.test(expression); // Regex to test for operators at the end
}

// Function to save the current expression state in history
function saveState() {
    if (historyIndex < history.length - 1) {
        history = history.slice(0, historyIndex + 1); // Remove any future states if moving backwards
    }
    history.push(expression); // Add the current expression to history
    historyIndex++; // Move forward in the history
}

// Function to go to the previous state in history
function previous() {
    if (historyIndex > 0) {
        historyIndex--; // Move to the previous state
        expression = history[historyIndex]; // Restore the expression from history
        updateDisplay(); // Update the display with the previous expression
    }
}

// Function to go to the next state in history
function next() {
    if (historyIndex < history.length - 1) {
        historyIndex++; // Move to the next state
        expression = history[historyIndex]; // Restore the expression from history
        updateDisplay(); // Update the display with the next expression
    }
}

// Function to highlight the currently active operator button
function highlightOperator(op) {
    removeActiveOperator(); // Remove highlight from any currently active operator
    const operatorButton = document.querySelector(`button.operator[onclick*="${op}"]`); // Find the button for the operator
    if (operatorButton) {
        operatorButton.classList.add("active"); // Add the active class to the button
    }
}

// Function to remove the highlight from any active operator button
function removeActiveOperator() {
    const activeOperator = document.querySelector("button.operator.active"); // Find the active operator button
    if (activeOperator) {
        activeOperator.classList.remove("active"); // Remove the active class
    }
}

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key); // Append number if key is a digit
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendOperator(key); // Append operator if key is an operator
    } else if (key === ".") {
        appendDecimal(); // Append decimal if key is a dot
    } else if (key === "Enter") {
        calculate(); // Calculate result if Enter key is pressed
    } else if (key === "Backspace") {
        clearDisplay(); // Clear display if Backspace key is pressed
    } else if (key === "Escape") {
        clearDisplay(); // Clear display if Escape key is pressed
    }
});
