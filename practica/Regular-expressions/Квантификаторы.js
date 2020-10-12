// Количество

// Array [ "13000" ] - 5 цифр
console.log( "13000000$".match(/\d{5}/) )



// Диапазон

// Array [ "13000", "13000000" ]
console.log( "Сначала 13000$, потом 13000000$".match(/\d{5,9}/g) )

// Array [ "13000", "13000000" ] - верхняя граница бесконечна
console.log( "Сначала 13000$, потом 13000000$".match(/\d{5,}/g) )



// Короткие обозначения

// + - искать один или более

// [ "38", "066", "130", "33", "13" ] 
console.log( "+38(066)-130-33-13".match(/\d+/g) )



// ? - искать ноль или один

// Array [ "color", "colour" ]
console.log( "Следует писать color или colour?".match(/colou?r/g) )



// * - ноль или более

// Array(3) [ "100", "10", "1" ]
console.log( "100 10 1".match(/\d0*/g) )



// Действия с дробями

// Array [ "12.345" ]
console.log( "0 1 12.345 7890".match(/\d+\.\d+/g) )




// Действия с поиском HTML тегов

// Array [ "<body>" ]
console.log( "<body> ... </body>".match(/<[a-z]+>/gi) ) 

// Array [ "<h1>" ]
console.log( "<h1>Привет!</h1>".match(/<[a-z0-9]+>/gi) )





// 1) Как найти многоточие "..." ?

let str = "Привет!... Как дела?....."
let regexp = /[.]+/g

// Array [ "...", "....." ]
console.log(str.match(regexp))




//2)  Регулярное выражение для HTML-цветов 6 шестнадцатеричных символов.

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678"
let regexp = /#[a-f0-9]{6}\b/gi


// Array [ "#121212", "#AA00ef" ]
console.log(str.match(regexp))


