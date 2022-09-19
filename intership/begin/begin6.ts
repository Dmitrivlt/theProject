// Begin6◦. Даны длины ребер a, b, c прямоугольного параллелепипеда. Найти
// его объем V = a·b·c и площадь поверхности S = 2·(a·b + b·c + a·c).

const a = 3;
const b = 5;
const c = 7;
let v = a * b * c;
let s = 2 * (a * b + b * c + a * c);
console.log(` Volume (${v}),\n Surface (${s})`)