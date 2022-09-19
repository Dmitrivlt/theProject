// While12. An integer N (> 1) is given. Find the largest integer K such that the sum
// 1 + 2 + ... + K is less than or equal to N. Output K and the corresponding sum.

const n = 22;
let sum = 0;
let k = 0;
while (sum + k <= n) {
  k++;
  sum = sum + k;

};
console.log(sum, k);


// n = 22, k = 0, sum = 0
// n = 22, k = 1, sum = sum + k  (= 1) 
// n = 22, k = 2, sum = sum + k  (= 3)
// n = 22, k = 3, sum = sum + k  (= 6)
// n = 22, k = 4, sum = sum + k  (= 10)
// n = 22, k = 5, sum = sum + k  (= 15)
// n = 22, k = 6, sum = sum + k  (= 21)


// n = 15, k = 0, sum = 0
// k = 1, sum = sum + k (1)
// k = 2, sum = sum + k (3)
// k = 3, sum = sum + k (6)
// k = 4, sum = sum + k (10)
// k = 5, sum = sum + k (15)