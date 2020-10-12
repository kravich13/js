// ищет после go ещё go, поиск по go+ означал бы поиск o много раз
console.log( "Gogogo now".match(/(go)+/i) )



// Поиск домена

var str = "mail.com users.mail-com smith.users.mail.com"
var regexp = /(\w+[-.])+\w+/gi

console.log(str.match(regexp))



// Поиск Email
// В скобках нужно искать именно текст точк
var regexp = /\w+@(\w+\.)+\w+/gi

console.log("my@mail.com @ his@site.com.uk".match(regexp))



// Скобочные группы

var str = '<span id="kra">' 

// найти <( (все буквы) разделенные пробелом (найти все символы) )>
var regexp = /<((\w+)\s([^>]*))>/

var tag = str.match(regexp)
console.log(tag)






// 1) Найти цвет в формате #abc или #abcdef

var str = "color: #3f3; background-color: #AA00ef; and: #abcd"
var regexp = /#\b[a-f0-9]{3}\b|#\b[a-f0-9]{6}\b/gi

// Array [ "#3f3", "#AA00ef" ]

console.log(str.match(regexp))



// 2) Найти все числа +++++++++++

let regexp = /-?\d+(\.\d)|\d+/g

let str = "-1.5 0 2 -123.4."

console.log( str.match(regexp) ) // Array(4) [ "-1.5", "0", "2", "-123.4" ]




// 3) Разобрать выражение

// var [a, op, b] = parse("1.2 * 3.4")

parse("-1.2 * 3.4")

function parse(expression) {
    var regexp = /(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)/
    var result = expression.match(regexp)

    console.log(result)
}



console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4




// 4) Проверьте MAC-адрес

var regexp = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}/gi

console.log('01:32:54:67:89:AB'.match(regexp))

console.log( regexp.test('01:32:54:67:89:AB') ); // true
console.log( regexp.test('0132546789AB') ); // false (нет двоеточий)
console.log( regexp.test('01:32:54:67:89') ); // false (5 чисел, должно быть 6)
console.log( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ в конце строки)