// Begin28. Given a number A, compute a power A15 using five multiplying operators for computing A2, A3, A5, A10, A15 sequentially. Output all obtained powers of the number A.

const a = 2;
let a2 = a * a;
let a3 = a * a * a;
let a5 = a2 * a3;
let a10 = a5 * a5;
let a15 = a10 * a5;
console.log(a, a2, a3, a5, a10, a15)