// import './script1.js'





// Выводит изменный объект файлом script2.js и теперь поле admin.name = "Kravich"

import {admin} from './script1.js'
console.log(admin.name) // Kravich





// Этот модуль видит уже изменный объект модулем script2.js и таким образом, функция sayHi с нужным полем теперь доступна и выводит то, что было нужно:

import {kravich, sayHi} from './script1.js'

console.log(kravich.name) // Vlad, в script2 добавилось новое поле
sayHi() // Сервер готов, Vlad!