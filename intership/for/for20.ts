// For20. An integer N (> 0) is given. Using one loop-statement compute the sum 1! + 2! + 3! + ... + N!,
// where N! (N–factorial) is the product of all integers in the range 1 to N: N! = 1·2·...·N. To avoid the integer overflow, compute the sum using real
// variables and output the result as a real number.

// For20◦. Дано целое число N (> 0). Используя один цикл, найти сумму
// 1! + 2! + 3! + ... + N!
// (выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: N! = 1·2·...·N). Чтобы избежать целочисленного переполнения, проводить вычисления с помощью вещественных переменных
// и вывести результат как вещественное число.

let n = 35
let sum = 0
for (let i = 1; i < n; i++) {
  let fact = 1
  for (let j = 1; j < i; j++) {
    fact *= i
    sum += fact
  }
} console.log(sum)
