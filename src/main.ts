const inputScheduled = document.querySelector(".inputScheduled") as HTMLInputElement;
const inputLate = document.querySelector(".inputLate") as HTMLInputElement;
interface inputs {
    ScheduledHours: number;
    latehours: number
}
function calculation() {
    //TODO сделать парсинг значений и вычесления резултата
    const output = (inputScheduled.value + inputLate.value)%24
}
//TODO сделать вывод в html