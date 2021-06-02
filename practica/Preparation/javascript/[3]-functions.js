function classicFn(n) {
  return n * n
}
classicFn(13) // 169

const arrowFn = (n) => n * n
console.log(arrowFn(13)) // 169

// Отличие классической функции от стрелочной в следующем:

// Классика:
// для возвращаемого значения нужно обязательно делать return
// this равен window

// Стрелочные:
// для вощвращаемого значения не нужен return, нужен лишь в скобках => {}
// this равен лексическому окружению

// ===== Разница функции через var и функции с именем =====

var fn = function () {}
var fn = {}
console.log(fn) // object {}

function fn() {}
let fn = 'qq' /// ошибка декларации
