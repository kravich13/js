let str = "Vlad None Max Kravich"
let regexp = /vlad|max|kravich/gi

// Array(3) [ "Vlad", "Max", "Kravich" ]
console.log(str.match(regexp))



// 1)
let str = "Vlad Kravich Max Kravich"
let regexp = /vlad|max kravich/gi

// Array [ "Vlad", "Max Kravich" ]
console.log(str.match(regexp))



// 2)
let str = "Vlad Kravich Max Kravich"
let regexp = /(vlad|max) kravich/gi

// Array [ "Vlad Kravich", "Max Kravich" ]
console.log(str.match(regexp))




// Шаблон для времени

let str = "13:15 13:99 25:00 12:00"
let regexp = /([01]\d|2[0-3]):[0-5]\d/g

// Array [ "13:15", "12:00" ]
console.log(str.match(regexp))






// 1) Найдите языки программирования

let regexp = /java(script)?|PHP|C[+]+|C/gi

console.log("Java JavaScript PHP C++ C".match(regexp)) 




// 2) Найдите пары BB-кодов

let regexp = /\[(b|url|quote)\].+\[[/](b|url|quote)\]/gs

let str = "..[url][b]http://ya.ru[/b][/url]..";

// Array [ "[url][b]http://ya.ru[/b][/url]" ]
console.log( str.match(regexp) )




// -3) Найдите строки в кавычках

var regexp = /"(\\.|[^"\\])*"/g
var str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

alert( str.match(regexp) ) // "test me","Скажи \"Привет\"!","\\ \""







// Найти сколько раз встречается каждый символ

let str = "The quick brown fox jumps over the lazy dog"
let str = 'I � � u'
let str = '𝟘 𝟙 𝟚 𝟛'

let newStr = str.toLowerCase()
let regexp = /.?/giu

let allSymbols = newStr.match(regexp)
allSymbols = Array.from(allSymbols)

searchSymbol(allSymbols)

function searchSymbol (arr) {
    arr.pop()

    const set = new Set(arr)
    const map = new Map()
    const resultArr = []

    for (let value of set) {
        let i = 0

        arr.forEach(function (elem) {
            if (value.toUpperCase() === elem.toUpperCase()) {
                map.set(value, i++)
            }
        })
        resultArr.push(`Символ •${value}• встречается ${i} раз.`) 
    }

    function sorting (a, b) {
        if (a < b) return -1 
        else return 1
    }

    return resultArr.sort(sorting)
}





