"use strict";
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    size() {
        return this.items.length;
    }
}
function isValid(str) {
    const brackets = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    const stack = new Stack();
    for (const char of str) {
        if (brackets.hasOwnProperty(char)) {
            const opening = stack.pop();
            if (brackets[char] !== opening) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }
    return stack.size() === 0;
}
const bracketsForm = document.getElementById('bracketsForm');
const outputElement = document.getElementById("result");
const inputError = document.getElementById('inputError');
function validateInput(input) {
    if (input.length === 0) {
        return {
            isValid: false,
            error: 'Введите строку для проверки'
        };
    }
    const validChars = /^[()\[\]{}]*$/;
    if (!validChars.test(input)) {
        return {
            isValid: false,
            error: 'Строка может содержать только символы: ( ) [ ] { }'
        };
    }
    return { isValid: true };
}
function handleFormSubmit() {
    const inputElement = document.getElementById('bracketsInput');
    const inputValue = inputElement.value.trim();
    const validationResult = validateInput(inputValue);
    inputError.textContent = '';
    if (!validationResult.isValid) {
        inputError.textContent = validationResult.error;
        outputElement.textContent = 'Строка не валидна';
        return;
    }
    if (isValid(inputValue)) {
        outputElement.textContent = 'Строка валидна';
    }
    else {
        outputElement.textContent = 'Строка не валидна';
        inputError.textContent = 'Скобки расставлены не правильно';
    }
}
bracketsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleFormSubmit();
});
//# sourceMappingURL=task2.js.map