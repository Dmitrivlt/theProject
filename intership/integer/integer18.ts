// Integer18. An integer greater than 999 is given. Using one operator of integer division and one operator of taking the remainder find a thousands digit of the given integer.

let a = 1024
let b = (a % 10000) / 1000
console.log(b)