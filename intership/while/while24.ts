// While24. An integer N (> 1) is given. An integer-valued sequence of the Fibonacci numbers FK is defined as:
// F1 =1, F2 =1, FK =FK−2 +FK−1, K=3,4,....
// Determine whether N is a Fibonacci number or not, and output True or False respectively.

// While24. Дано целое число N (> 1). Последовательность чисел Фибоначчи FK определяется следующим образом:
// F1 =1, F2 =1, FK =FK−2 +FK−1, K =3,4,.... Проверить, является ли число N числом Фибоначчи. Если является, то вывести TRUE, если нет — вывести FALSE.

let n = 25
let f1 = 1
let f2 = 1
let f = 0
while (f < n) {
  f = f2 + f1
  f1 = f2
  f2 = f
  if (n == f) {
    console.log(true)
  } else {
    console.log(false)
  }
  console.log(f)
}





// fibonacci : 1,1,2,3,5,8,13,21,