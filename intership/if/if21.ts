// If21. Integer coordinates of a point in the coordinate plane are given. If the point coincides with the origin of coordinates then output 0, otherwise if the point
// defined as:
// lies on the x-axis or y-axis then output 1 or 2 respectively. If the point does not lie on the coordinate axes then output 3.

// If21. Даны целочисленные координаты точки на плоскости. Если точка совпадает с началом координат, то вывести 0. Если точка не совпадает с началом координат, но лежит на оси OX или OY, то вывести соответственно 1 или 2. Если точка не лежит на координатных осях, то вывести 3.

let x = 23
let y = 12
if (y == x) {
  console.log(0)
} else if (x == 0 && y != 0) {
  console.log(1)
} else if (x != 0 && y == 0) {
  console.log(2)
} else {
  console.log(3)
}