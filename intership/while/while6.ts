// While6. Given an integer N (> 0), compute the double factorial of N: N!! = N·(N−2)·(N−4)·...,
// where the last factor equals 2 if N is an even number, and 1 otherwise. To avoid the integer overflow, compute the double factorial using a real variable and output the result as a real number.

// While6. Дано целое число N (>0). Найти двойной факториал N: N!! = N·(N−2)·(N−4)·. . .
// (последний сомножитель равен 2, если N — четное, и 1, если N —нечетное). Чтобы избежать целочисленного переполнения, вычислять это произведение с помощью вещественной переменной и вывести его как вещественное число.

// let n = 11
// let r = 0
// while (n > 0) {
//   r += n * (n - 2)
//   n = n - 2

//   console.log(r)

// } 

let n = 10
let r = 1
while (n > 1) {
  r *= n
  n -= 2
  console.log(r)
}


// r = 1, n = 10 
// r = 10, n - 2 = 8
// r * 8 = 80, n - 2 = 6
// r * 6 = 480, n - 2 = 4
// r * 4 = 1920, n - 2 = 2
// r * 2 = 3840, n - 2 = 0
// false

// r = 1, n = 11
// r = 11, n = 9
// r = 99, n = 7
// r = 693, n = 5
// r = 3465, n = 3
// r = 10395, n = 1
// false