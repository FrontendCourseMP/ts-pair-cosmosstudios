class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    size(): number {
        return this.items.length;
    }
}

function isMatch(char1: string, char2: string): boolean {
    const map = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ]);

    return map.get(char1) === char2;
}

function isValid(str: string): boolean {
    const brackets: {[key: string]: string} = {
        ']': '[',
        '}': '{',
        ')': '(' 
    }
    const stack = new Stack();
    for (const char of str) {
        if (brackets.hasOwnProperty(char)) {
            const opening = stack.pop();
            if (brackets[char] !== opening) {
                return false;
            }
        } else { 
                stack.push(char);
        }
    }
    return stack.size() === 0;
}

const bracketsForm = document.getElementById('bracketsForm') as HTMLFormElement;
const outputElement = document.getElementById("result") as HTMLOutputElement;
const inputError = document.getElementById('inputError') as HTMLElement;


function validateInput(input: string): { isValid: boolean; error?: string } {
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

function handleFormSubmit(): void {
    const inputElement = document.getElementById('bracketsInput') as HTMLInputElement;
    const inputValue = inputElement.value.trim();

    const validationResult = validateInput(inputValue);

    inputError.textContent = '';

    if (!validationResult.isValid) {
            inputError.textContent = validationResult.error!;
            outputElement.textContent = 'Строка не валидна';
            return;
    }

    if (isValid(inputValue)) {
        outputElement.textContent = 'Строка валидна';
    } else {
        outputElement.textContent = 'Строка не валидна';
        inputError.textContent = 'Скобки расставлены не правильно';
    }
}

bracketsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleFormSubmit();
});