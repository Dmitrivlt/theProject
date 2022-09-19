// While27. Given an integer N (> 1) that is a Fibonacci number: N = FK, find its order number K (see the Fibonacci numbers definition in While24).

// While27. Дано целое число N (>1), являющееся числом Фибоначчи: N = FK 
//  Найти целое число K — порядковый номер числа Фибоначчи N.



let n = 5
let f1 = 1
let f2 = 1
let f = 0
let k = 0
while (f < n) {
  f = f2 + f1
  f1 = f2
  f2 = f
  k = f + f1
} console.log(k)

