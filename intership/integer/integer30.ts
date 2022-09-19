// Integer30. Given a year (as a positive integer), find the respective number of the century. Note that, for example, 20th century began with the year 1901.


let a = 1901
let b = ((a - 1) / 100 + 1)
console.log(`Century = ${b}`)