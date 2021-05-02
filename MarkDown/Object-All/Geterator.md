- [Генераторы](#генераторы)
- [Перебор генераторов](#перебор-генераторов)
- [Использование генераторов для перебираемых объектов](#использование-генераторов-для-перебираемых-объектов)
- [Композиция генераторов](#композиция-генераторов)
- [Передача значения во внутрь yield генератора](#передача-значения-во-внутрь-yield-генератора)
- [generator.throw](#generatorthrow)


## Генераторы

Генераторы - это спец. тип функции, который работает как фабрика итераторов. Функция становится генератором, если содержит один или более `yield` операторов и использует `function*`.

Пример **функции генератора**:

```javascript
const name = ["Vlad", "Kravich", "33 years"]

function* generatorArr (arr) {
    for (let index of arr) {
        yield index
    }
}

const gen = generatorArr(name)

console.log(gen.next().value) // Vlad
console.log(gen.next().value) // Kravich
console.log(gen.next().value) // 33 years

// Работает как итератор, но в чём-то лучше
```
***

Основным методом генератора является `next()`. При вызове он запускает выполнение кода до ближайшей конструкции `yield`. По достижении `yield` выполнение функции приостанавливается, а соответствующее значение - возвращается во внешний код: 

Результатом метода `next()` всегда является объект с двумя свойствами: `value` and `done`.
***

## Перебор генераторов

Генераторы являются перебираемыми объектами (прямо как итераторы).

Возвращаемые значения можно получить через цикл `for...of`: 

```javascript
function* generatorSequence () {
    yield 1
    yield 2
    return 3

    // нужно писать yield 3, тогда оно выведется
}

const generator = generatorSequence() 

for (let value of generator) {
    console.log(value)
}
```

Цикл `for...of` в данном примере выводит только `yield` **1** и **2**. `return` выведен не будет. 

Связано с тем, что перебор через `for...of` игнорирует последнее значение при котором `done: true`. По этому, для того, чтобы вернуть все значения из функции - надо их все писать через `yield`.


**Поскольку** генераторы являются перебираемыми объектами, можно использовать всю связанную с ними функциональность, например, оператор расширения `...`.

```javascript
function* generateSequence () {
  yield 1
  yield 2
  yield 3
}

let sequence = [0, ...generateSequence()]

console.log(sequence) // Array(4) [ 0, 1, 2, 3 ]
```
***

## Использование генераторов для перебираемых объектов

Пример генератора для перебираемых объектов с помощью `yield`:

```javascript
const range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value
    }
  }
}

console.log( [...range] ) // 1,2,3,4,5
```

Это работает, потому что `range[Symbol.iterator]()` теперь возвращает генератор, и его методы – в точности то, что ожидает `for...of`:

* у него есть метод `.next()`
* и он возвращает значения в виде `{ value: ..., done: true/false }`
***

## Композиция генераторов

Композиция генераторов - это особенная возможность, которая позволяет прозрачно встраивать генераторы друг в друга. 

Для генераторов есть метод `yield*`, который позволяет вкладывать генераторы один в другой. 

Пример композиции генераторов: 


```javascript
function* generateSequence(start, end) { // цикл от начала и до конца
  for (let i = start; i <= end; i++) yield i
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57) // вызов функции для перебора

  // A..Z
  yield* generateSequence(65, 90)

  // a..z
  yield* generateSequence(97, 122)

}

let str = ''

// цикл вызывает генератор, который вызывает другой генератор
for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code) 
}

console.log(str) // 0..9A..Za..z
```

**P.S.** числа 48, 57, 65, 90, 97 и 122 являются кодами символов. Для преобразования используется метод `String.fromCharCode(число)`.
***

## Передача значения во внутрь yield генератора

`yield` может не только возвращать результат наружу, но и может передавать значение извне в генератор.

Чтобы это сделать, нужно вызвать `generator.next(arg)` с аргументом. Этот аргумент становится результатом `yield`.

```javascript
function* gen() {
  // Передаём вопрос во внешний код и ожидаем ответа
  let result = yield "what do you want?"

  console.log(result)
}

let generator = gen()

const question = generator.next().value // <-- yield возвращает значение

generator.next("13 million dollars") // --> передаём результат в генератор
```


Так же можно вызвать `next(значение)` не сразу, ему может потребоваться время и для этого можно засунуть его в таймаут: 

```javascript
setTimeout(() => generator.next("13 million dollars"), 1000) // сработает через секунду
```
***

## generator.throw

Можно передать ошибку в `yield`, для этого нужно использовать `generator.throw(err)`. В таком случае исключение возникнет в строке с `yield`.

Например, здесь `yield "2 + 2 = ?" приведет к ошибке: 

```javascript
function* gen() {
  try {
    let result = yield "2 + 2 = ?" 

    console.log("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение")

    // дойдет, если сделать generator.next(4)
  } 
  catch (e) {
    console.log(e) // покажет ошибку
  }
}

let generator = gen()

let question = generator.next().value

generator.throw (new Error("Ответ не найден в моей базе данных")) 
```