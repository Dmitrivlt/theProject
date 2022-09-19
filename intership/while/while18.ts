// While18. Given an integer N (> 0), find the amount and the sum of its digits. Use the operators of integer division and taking the remainder after integer division.

// While18. Дано целое число N (>0). Используя операции деления нацело и взятия остатка от деления, найти количество и сумму его цифр.


let n = 126;
let sum = 0;
let a = 0;
while (n > 0) {
  a++;
  sum += n % 10;
  n = Math.trunc(n / 10);


} console.log(sum, a)




// n = 13 
// n / 