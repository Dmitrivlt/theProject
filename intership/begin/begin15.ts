// Begin15. Given the area S of a circle, find the diameter D and the length L of the circumference. Take into account that L = π·D, S = π·D2/4. Use 3.14 for a value of π.

const s = 30;

let d = Math.sqrt((s / 3.14));
let l = 3.14 * d;
console.log(d, l)