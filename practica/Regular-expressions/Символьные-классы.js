// Нахождение первой цифры в номере телефона
let str = "+38(066)-590-37-93"
let regexp = /\d/

str.match(regexp)



// Флаг g ищет все совпадения, найдем все цифры
let str = "+38(066)-590-37-93"
let regexp = /\d/g

str.match(regexp) // Array(12) - 12 чисел в строке str



// Нахождение всего номера без лишних знаков
let str = "+38(066)-590-37-93"
str.replace(/\D/g, "")  // "380665903793" 
// не цифры по флагу все совпадения без пробелов





// Точка - любой символ
let regexp = /kravich.\d\d/

console.log("kravich13".match(regexp)) // нет совпадений ибо нет символа для точки
console.log("kravich-13".match(regexp)) // Array [ "kravich 13" ]
console.log("kravich 13".match(regexp)) // Array [ "kravich 13" ]



// Точка не является символом \n, для перевода строки нужно использовать флаг s
console.log("Vlad\nKravich".match(/Vlad.Kravich/s)) // Array [ "Vlad\nKravich" ]