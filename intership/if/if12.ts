// If12.Given three real numbers, output the minimal value of them.

// If12◦. Даны три числа. Найти наименьшее из них.

let a = 24
let b = 12
let c = 15
if (a > b && b > c) {
  console.log(`c is minimal number (${c})`)
} else if (a < b && b < c) {
  console.log(`a is minimal number(${a})`)
} else if (a > c && c > b) {
  console.log(`b is minimal number (${b})`)
} else {
  console.log(0)
}