// While9. Given an integer N (> 1), find the smallest integer K such that the inequality 3K > N is fulfilled.

let n = 10
let r = 0
let k = 1
while (r < n) {
  r = 3 * k
  if (r < n) {
    k++;
  }
}
console.log(k, r)


// n = 10, k = ? 
// n = 10, 3k = 3 * 1
// n = 10, 3k = 3 * 2 = 6
// n = 10, 3k = 3 * 3 = 9
// n = 10, 3k = 3 * 4 = 12 true