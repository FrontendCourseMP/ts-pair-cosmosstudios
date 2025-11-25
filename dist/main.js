"use strict";
const form = document.getElementById("arrivalForm");
const inputScheduled = document.getElementById("inputScheduled");
const inputDelay = document.getElementById("inputDelay");
const output = document.getElementById("output");
const scheduledHourErrorElement = document.getElementById('scheduledHourError');
const delayHoursErrorElement = document.getElementById('delayHoursError');
function parseAndValidateData(scheduledHourStr, delayHoursStr) {
    const errors = [];
    if (!scheduledHourStr.trim()) {
        errors.push("Час прибытия по расписанию обязателен для заполнения");
    }
    if (!delayHoursStr.trim()) {
        errors.push("Количество часов опоздания обязательно для заполнения");
    }
    if (errors.length > 0) {
        return { isValid: false, errors };
    }
    const scheduledHour = parseInt(scheduledHourStr);
    const delayHours = parseInt(delayHoursStr);
    if (isNaN(scheduledHour)) {
        errors.push("Час прибытия по расписанию должен быть числом");
    }
    if (isNaN(delayHours)) {
        errors.push("Количество часов опоздания должно быть числом");
    }
    if (errors.length > 0) {
        return { isValid: false, errors };
    }
    if (scheduledHour < 0 || scheduledHour > 23) {
        errors.push("Час прибытия по расписанию должен быть в диапазоне от 0 до 23");
    }
    if (delayHours < 0) {
        errors.push("Количество часов опоздания не может быть отрицательным");
    }
    if (errors.length > 0) {
        return { isValid: false, errors };
    }
    return {
        isValid: true,
        errors: [],
        data: { scheduledHour, delayHours }
    };
}
function calculation() {
    const validationResult = parseAndValidateData(inputScheduled.value, inputDelay.value);
    let scheduledHourIsValid = true;
    let delayHoursIsValid = true;
    if (!validationResult.isValid) {
        validationResult.errors.forEach(error => {
            if (error.includes('Час прибытия')) {
                scheduledHourIsValid = false;
                scheduledHourErrorElement.textContent = error;
            }
            else if (error.includes('Количество часов опоздания')) {
                delayHoursIsValid = false;
                delayHoursErrorElement.textContent = error;
            }
        });
        output.value = '';
        return;
    }
    if (scheduledHourIsValid) {
        scheduledHourErrorElement.textContent = '';
    }
    if (delayHoursIsValid) {
        delayHoursErrorElement.textContent = '';
    }
    const { scheduledHour, delayHours } = validationResult.data;
    const result = (scheduledHour + delayHours) % 24;
    output.value = result.toString();
}
form.addEventListener("focusout", calculation);
//# sourceMappingURL=main.js.map