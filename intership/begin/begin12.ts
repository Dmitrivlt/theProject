// Begin12◦. Даны катеты прямоугольного треугольника a и b. Найти его гипо- тенузу c и периметр P: 

const a = 3;
const b = 5;
let c = Math.sqrt((a * a) + (b * b));
let p = a + b + c
console.log(c, p)