// Begin40. Solve a system of linear equations
// A1·x + B1·y = C1,
// A2·x + B2·y = C2
// with given coefficients A1, B1, C1, A2, B2, C2 provided that the system has the
// only solution. Use the following formulas:
// x = (C1·B2 − C2·B1)/D, y = (A1·C2 − A2·C1)/D,
// where D = A1·B2 − A2·B1.

let A1 = 2;
let A2 = 3;
let B1 = 9;
let B2 = 7;
let C1 = 13;
let C2 = 11;
let D = A1 * B2 - A2 * B1;
let x = (C1 * B2 - C2 * B1) / D;
let y = (A1 * C2 - A2 * C1) / D;
console.log(x, y)