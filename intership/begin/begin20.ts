// Begin20◦. Найти расстояние между двумя точками с заданными координатами (x1, y1) и (x2, y2) на плоскости. Расстояние вычисляется по формуле
// 􏰂(x2 − x1)2 + (y2 − y1)2.

const x1 = 5
const x2 = 6
const y1 = 15
const y2 = 13
let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
console.log(distance)