//Begin13. Given the radiuses R1 and R2 of two concentric circles (R1 > R2), find the areas S1 and S2 of the circles and the area S3 of the ring bounded by the circles:
//S1 = π·(R1)2, S2 = π·(R2)2, S3 = S1 − S2. Use 3.14 for a value of π.

const r1 = 13;
const r2 = 8;
let s1 = 3.14 * (r1 * r1);
let s2 = 3.14 * (r2 * r2);
let s3 = s1 - s2;
console.log(s1, s2, s3)
