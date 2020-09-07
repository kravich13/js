// [abc] - означает искать любой символ из заданных в квадратных скобках


// Array [ "Vlad", "Glad" ]
console.log( "Vlad Glad".match(/[vg]lad/gi) )


// null - подойдет или vld или vad
console.log( "Vlad".match(/v[la]d/gi) )




// [a-d] - искать символ от a до d, или [0-9] - цифра от 0 до 9


// Искать после символа x число от 0-9 или букву от A до F (можно наоборот) и также во втором символе 
console.log( "Kravich 0xAF".match(/x[0-9A-F][0-9A-F]/g) ) // Array [ "xAF" ]
console.log( "Kravich 0xB1".match(/x[0-9A-F][0-9A-F]/g) ) // Array [ "xB1" ]
console.log( "Kravich 0x13".match(/x[0-9A-F][0-9A-F]/g) ) // Array [ "x13" ]




// В квадратных скобках большинство спец. символов можно использовать без экранирования

// Array(6) [ "+", "(", ")", "-", ".", "^" ]
console.log( "Vlad + () - Kravich.^".match(/[-().^+]/g) ) 






// 1) Найдите время как hh:mm или hh-mm

let str = "Завтрак в 09:00. Ужин в 21-30"

let regexp = /\b\d{2}[:-]\d{2}\b/g

console.log(str.match(regexp)) // Array [ "09:00", "21-30" ]