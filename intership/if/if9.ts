// If9. The values of two real variables A and B are given. Redistribute the values so that A and B have the smaller and the larger value respectively. Output the new values of the variables A and B.

// If9. Даны две переменные вещественного типа: A, B. Перераспределить значе-
// ния данных переменных так, чтобы в A оказалось меньшее из значений,
// а в B — большее. Вывести новые значения переменных A и B.

let a = 23
let b = 14
if (a > b) {
  a = a + b
  b = a - b
  a = a - b

} else {
  console.log(0)
}

