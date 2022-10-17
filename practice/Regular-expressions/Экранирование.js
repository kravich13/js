// Экранирование - это спецсимвол становящийся обычным символом.



// Точка .

// Array [ "5.1" ]
console.log( "Глава 5.1".match(/\d\.\d/) ) 

// null, ищет обычную точку
console.log( "Глава 511".match(/\d\.\d/) ) 



// Круглые скобки ()

// Array [ "kravich()" ]
console.log( "function kravich()".match(/kravich\(\)/) )



// Обратная косая черта \

// Array [ "\\" ]
console.log( "1\\3".match(/\\/) )



// Слеш /

// Array [ "/" ]
console.log( "1/3".match(/\//) )

// RegExp
console.log( "/".match(new RegExp("/")) )






// Экранирование для new RegExp

let regStr = "\\d\\.\\d"

let regexp = new RegExp(regStr)

// Array [ "5.1" ]
console.log( "Глава 5.1".match(regexp) )