## Асинхронные итераторы

Асинхронный итератор имеет специальный метод: `Symbol.asyncIterator`:

* его `next()` должен возвращать промис
* чтобы перебрать такой объект, используется цикл `for await (let item of iterable)`.

Пример асинхронного итератора:

```javascript

const range = {
    from: 1,
    to: 5,
  
    [Symbol.asyncIterator]() { // асинхронный итератор
  
      return {
        current: this.from,
        last: this.to,
  
        // next() вызывается на каждой итерации цикла for await..of
  
        async next() { // асинхронная функция next
  
          await new Promise(resolve => setTimeout(resolve, 1000)) // задержка в одну секунду
  
          if (this.current <= this.last) {
            return {
              done: false,
              value: this.current++
            }
          } 
          else {
            return {
              done: true
            }
          }
        }
      }
    }
  }; // должна быть обязательная скобка
  
  (async () => {
  
    for await (let value of range) {
      console.log(value) // через каждую секунду будет выводить 1-5
    }
  
  })() // вызов стрелочкой функции
```
***
### Шпоргалка

 Синтаксис | Итераторы | Асинхронные итераторы 
 -|-|-
Метод для создания итерируемого объекта | `Symbol.iterator` | `Symbol.asyncIterator`
`next()` возвращает | любое значение |  промис
для цикла используется | `for..of` | `for await..of`

Добавлю: **оператор расширения `...` не работает асинхронно**.
***

## Асинхронные генераторы

Допустим, нужно использовать `await` в теле генератора для выполнения сетевых запросов.

Для этого нужно просто добавить в начале `async`, например, так:

```javascript
// добавили async 
async function* generateSequence(start, end) {

  for (let i = start; i <= end; i++) {

    // используем await
    await new Promise(resolve => setTimeout(resolve, 1000))

    yield i // сработает лишь после промиса!
  }

}

(async () => {

  let generator = generateSequence(1, 5)
  
  // await в цикле for
  for await (let value of generator) { 
    console.log(value) // 1, потом 2, потом 3, потом 4, потом 5
  }

})()
```

Из обычного генератора мы можем получить значения при помощи `result = generator.next()`. Для асинхронного нужно добавить `await`, вот так:

```javascript
result = await generator.next() // result = { value: ..., done: true/false }
```
***

## Асинхронно перебираемые объекты

Чтобы сделать объект асинхронно итерируемым - нужно использовать в нём метод `[Symbol.asyncIterator]()`:

```javascript
const range = {
  from: 3, 
  to: 7,

  async *[Symbol.asyncIterator]() { // асинхронный символ (функция)

    for (let value = this.from; value <= this.to; value++) { // асинхронный цикл

      await new Promise (resolve => setTimeout(resolve, 1000)) // сначала задержка в одну секунду

      yield value // после - исполнение yield 
    }
  }
};

(async () => { // асинхронная стрелочная функция 

  for await (let value of range) { // асинхронный перебираемый объект
    console.log(value)
  }
})() // вызов функции

```