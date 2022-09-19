// If15. Given three real numbers, output the sum of two largest values.

// If15. Даны три числа. Найти сумму двух наибольших из них.

let a = 35
let b = 5
let c = 6
if (a > b && b > c) {
  console.log(`a and b are largest, a = (${a}), b = (${b}), sum = (${a + b})`)
} else if (a > c && c > b) {
  console.log(`a and c are largest, a = (${a}), c = (${c}), sum = (${a + c})`)
} else {
  console.log(`b and c are largest, b = (${b}), c = (${c}), sum = (${b + c})`)
}