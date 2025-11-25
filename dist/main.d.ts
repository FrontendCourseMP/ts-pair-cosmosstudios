declare const form: HTMLFormElement;
declare const inputScheduled: HTMLInputElement;
declare const inputDelay: HTMLInputElement;
declare const output: HTMLOutputElement;
declare const scheduledHourErrorElement: HTMLElement;
declare const delayHoursErrorElement: HTMLElement;
interface Inputs {
    scheduledHour: number;
    delayHours: number;
}
interface ValidationResult {
    isValid: boolean;
    errors: string[];
    data?: Inputs;
}
declare function parseAndValidateData(scheduledHourStr: string, delayHoursStr: string): ValidationResult;
declare function calculation(): void;
//# sourceMappingURL=main.d.ts.map