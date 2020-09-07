// Поиск двух цитат

let str = 'a "witch" and her "broom" is one'
let regexp = /"[a-z]+"/g


alert(str.match(regexp)) // "witch","broom"
console.log(str.match(regexp)) // Array [ "\"witch\"", "\"broom\"" ]




// Поиск ссылок с произвольным href

let str = '...<a href="https://learn.javascript.ru/regexp-greedy-and-lazy" class="doc">... <a href="link2" class="doc">...'
let regexp = /<a href="[^"]*" class="doc">/gi


console.log(str.match(regexp))





// 1) Поиск HTML-комментариев

let regexp = /<!--.*?-->/gs

let str = `... <!-- My -- comment
 test --> ..  <!----> ..
`

console.log(str.match(regexp))




// 2) Поиск HTML-тегов

let regexp = /<[^<>]+>/g

let str = '<> <a href="/"> <input type="radio" checked> <b>'

console.log( str.match(regexp) )