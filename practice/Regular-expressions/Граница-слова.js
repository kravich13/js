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






let regexp = /^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*/gi

// let str = "kravich.com"

// let str = "https://www.youtube.com/watch?v=PF7c0IDa4Eg&list=LL0diehf_SHUXf0UcXHjIs4Q&index=1"

// let regexp = /^(https:\/\/)?(w{3})\.[]/gi
// console.log(str.match(regexp))