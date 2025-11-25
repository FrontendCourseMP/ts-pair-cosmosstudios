declare class Stack<T> {
    private items;
    constructor();
    push(element: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}
declare function isMatch(char1: string, char2: string): boolean;
declare function isValid(str: string): boolean;
declare const bracketsForm: HTMLFormElement;
declare const outputElement: HTMLOutputElement;
declare const inputError: HTMLElement;
declare function validateInput(input: string): {
    isValid: boolean;
    error?: string;
};
declare function handleFormSubmit(): void;
//# sourceMappingURL=task2.d.ts.map