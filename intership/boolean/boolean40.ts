// Boolean40◦. 
// Даны координаты двух различных полей шахматной доски x1, y1, x2, y2 
// (целые числа, лежащие в диапазоне 1–8). Проверить истинность высказывания: 
// «Конь за один ход может перейти с одного поля на другое».

let x1 = 1
let x2 = 3
let y1 = 6
let y2 = 8
let a = (
  Math.abs(x1 - x2) == 1 &&
  Math.abs(y1 - y2) == 2 &&
  Math.abs(x1 - x2) == 2 &&
  Math.abs(y1 - y2) == 1
);
console.log(a);