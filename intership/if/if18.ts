// If18.Three integers are given. One of them differs from two other equal integers.Output the order number of the integer that differs from the others.

// If18. Даны три целых числа, одно из которых отлично от двух других, равных между собой. Определить порядковый номер числа, отличного от остальных.


let a = 24
let b = 12
let c = 24
if (a == b) {
  console.log(`a (${a}) is equal b (${b})`)
} else if (b == c) {
  console.log(`b (${b}) is equal c (${c})`)
} else if (a == c) {
  console.log(`a (${a}) is equal c (${c})`)
} else {
  console.log(0)
}