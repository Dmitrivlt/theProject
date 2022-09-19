// Begin17. Three points A, B, C are given on the real axis. Find the length of AC, the length of BC, and the sum of these lengths.

const a = 3;
const b = 9;
const c = 16;

let ac = Math.abs(a - c);
let bc = Math.abs(b - c);
let sum = ac + bc;
console.log(ac, bc, sum);
