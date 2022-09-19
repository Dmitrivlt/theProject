// For12. Given an integer N (> 0), find the value of a following product of N factors:
// 1.1 · 1.2 · 1.3 · ... .

let n = 3
let p = 1
for (let i = 1, j = 1.1; i <= n; i++, j += 0.1) {
  p *= j

  console.log(p)
} 