declare class Stack<T> {
    private items;
    constructor();
    push(element: T): void;
    pop(): T | undefined;
    size(): number;
}
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