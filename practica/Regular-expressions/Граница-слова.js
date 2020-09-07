// Array [ "Kravich" ]
console.log( "Привет, Kravich".match(/\bKravich\b/) ) 

// null, Kravich не раздельное слово
console.log( "Привет, VladKravich".match(/\bKravich\b/) ) 




// ! не является символом слова, поэтому поиск по Kravich! будет null

// Array [ "Kravich" ]
console.log( "Привет, Kravich!".match(/\bKravich\b/) )  

// null
console.log( "Привет, Kravich!".match(/\bKravich!\b/) ) 




// \b можно использовать с цифрами

console.log( "1 13 130 33".match(/\b\d{2}\b/g) ) // Array [ "13", "33" ]





// 1) Найти время среди всей строки в формате 00:00

let str = "Завтрак в 09:00 в комнате 123:456"

let regexp = /\b\d{2}:\d{2}\b/

console.log(str.match(regexp)) // Array [ "09:00" ]
