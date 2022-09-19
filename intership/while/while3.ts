// While3.
// Two positive integers N and K are given. Using addition and subtraction only, find a quotient of the integer division N on K and also a remainder after this division.

let n = 7
let k = 3
let x = 0
while (n > k) {
  n = n - k
  x++
} console.log(x, n)
