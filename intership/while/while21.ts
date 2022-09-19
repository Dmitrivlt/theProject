// While21. An integer N (> 0) is given. Determine whether its decimal representation contains odd digits or not, and output True or False respectively. Use the operators of integer division and taking the remainder after integer division.


//While21. Дано целое число N (>0). С помощью операций деления нацело и взятия остатка от деления определить, имеются ли в записи числа N нечетные цифры. Если имеются, то вывести TRUE, если нет — вывести FALSE.


let n = 13
let sum = 0
let r;
while (n > 0) {
  sum += n % 10;
  n = n / 10;
  if (sum % 2 != 0) {
    r = true;
  } else {
    r = false;
  }
} console.log(sum, r)