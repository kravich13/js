// Изменение встроенных прототипов

String.prototype.kravich = function () {
    console.log(`${this} Kravich`)
}

"Vlad".kravich() // String { "Vlad" }

// Создался новый метод для прототипов ко всем строкам




// Полифил для метода прототипа

if (!String.prototype.kravich) { // если нет такого метода
    
    String.prototype.kravich = function () {
        return `${this} Kravich`
    }
}

"Vlad".kravich()




// Заимствование прототипов

const obj = {
    0: "Vlad",
    1: "Kravich",
    length: 2.
}

obj.join = Array.prototype.join

console.log(obj.join(', ')) // Vlad, Kravich

obj // Object { 0: "Vlad", 1: "Kravich", length: 2, join: join() }

// Т.е. самому объекту встраивается метод из прототипа массивов





// Глобальная цепочка прототипов

// 'Object.prototype' - вершина цепочки прототипов

Object.prototype.__proto__ === null // самый верх, но без методов

// Все примитивные значения наследуются от своих соответствующих constructorFunction.prototype-s

let number = 5
let string = 's'
let boolean = true
const arr = []
const obj = {}
function f (n) { return n }

number.__proto__ === Number.prototype    
string.__proto__ === String.prototype    
boolean.__proto__ === Boolean.prototype   
arr.__proto__ === Array.prototype     
obj.__proto__ === Object.prototype    
f.__proto__ === Function.prototype  

// Тоже самое для объектов, созданных с помощью соответствующих конструкторов

number = new Number(5)
string = new String('s')
boolean = new Boolean(true)
arr = new Array([])
obj = new Object({})
const f = new Function('n', 'return n')

number.__proto__ === Number.prototype    
string.__proto__ === String.prototype    
boolean.__proto__ === Boolean.prototype   
arr.__proto__ === Array.prototype     
obj.__proto__ === Object.prototype    
f.__proto__ === Function.prototype  


// 'Function.prorotype' единственный глобальный прототип с typeof == 'function', остальные - 'object'. 

typeof Number.prototype     === 'object' 
typeof String.prototype     === 'object' 
typeof Boolean.prototype    === 'object' 
typeof Array.prototype      === 'object' 
typeof Object.prototype     === 'object' 
typeof Function.prototype   === 'function' 


// 'Function.prorotype' устанавливается как __proto__ для всех функций встроенного конструктора Это позволяет им заимствовать общие для всех функций методы  (call, apply, bind) и свойства (length, arguments, name).

Number.__proto__    === Function.prototype
String.__proto__    === Function.prototype
Boolean.__proto__   === Function.prototype
Array.__proto__     === Function.prototype
Object.__proto__    === Function.prototype
Function.__proto__  === Function.prototype // 'Function .__ proto__' явно устанавливается в Function.prototype по той же причине: 'Function' для доступа к общим методам и свойствам функции, которые установлены в 'Function.prototype'


// Сам 'Function.prototype' наследуется от 'Object.prototype'

Function.prototype.__proto__ === Object.prototype



// Но какие методы и свойства (разделенные на;) имеют глобальные конструкторы по сравнению с их .prototype-s?

// Конструкторы содержат только статические методы

console.dir(Number) // isNaN, isInteger, isFinite
console.dir(String) // fromCharCode, fromCodePoint, raw
console.dir(Boolean) // -
console.dir(Array) // isArray, from, of
console.dir(Object) // keys, values, entries, assign, create, seal, freeze, defineProperty, getOwnPropertyDescriptor, getPrototypeOf, setPrototypeOf
// Почему у Object так много методов? Это сделано для того, чтобы иметь возможность использовать их даже для объектов, созданных с помощью Object.create (null).
console.dir(Function) // -
// Все конструкторы имеют свойство length, которое указывает максимальное количество аргументов (если есть), которые конструктор ожидает при создании новых экземпляров


// Методы и свойства объектов конструктора .prototype заимствуются экземплярами.

console.dir(Number.prototype) // toPrecision, toFixed, toExponential
console.dir(String.prototype) // all string methods; length
console.dir(Boolean.prototype) // valueOf
console.dir(Array.prototype) // all array methods; length
console.dir(Object.prototype) // hasOwnProperty, isPrototypeOf, propertyIsEnumerable
console.dir(Function.prototype) // call, apply, bind; arguments, length, name
// Все встроенные прототипы имеют метод toString





// Prototype && __proto__

console.log(Object.prototype) // Object { … }
console.log(Array.prototype) // Array []
console.log(Function.prototype) // function ()
console.log(Number.prototype) // Number { 0 }

console.log(Object.__proto__) // function ()
console.log(Array.__proto__) // function ()
console.log(Function.__proto__) // function ()
console.log(Number.__proto__) // function ()



// Prototype.__proto && __proto__.__proto__

console.log(Object.prototype.__proto__) // null
console.log(Array.prototype.__proto__) // Object { … }
console.log(Function.prototype.__proto__) // Object { … }
console.log(Number.prototype.__proto__) // Object { … }

console.log(Object.__proto__.__proto__) // Object { … }
console.log(Array.__proto__.__proto__) // Object { … }
console.log(Function.__proto__.__proto__) // Object { … }
console.log(Number.__proto__.__proto__) // Object { … }



// Prototype.__proto__.__proto__ && __proto__.__proto__.__proto__

console.log(Object.prototype.__proto__.__proto__) // is null
console.log(Array.prototype.__proto__.__proto__) // null
console.log(Function.prototype.__proto__.__proto__) // null
console.log(Number.prototype.__proto__.__proto__) // null

console.log(Object.__proto__.__proto__.__proto__) // null
console.log(Array.__proto__.__proto__.__proto__) // null
console.log(Function.__proto__.__proto__.__proto__) // null
console.log(Number.__proto__.__proto__.__proto__) // null

