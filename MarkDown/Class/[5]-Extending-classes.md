## Расширение встроенных классов

От встроенных классов, таких как `Array`, `Map` и других, тоже можно наследовать.

В примере ниже `PowerArray` наследуется от встроенного `Array`:

```javascript
class PowerArray extends Array {
    
    isEmpty() {

        console.log(this) // Array
        return this.length === 0
    }
}

const arr = new PowerArray(1, 2, 3, 10, 33)

console.log(arr.isEmpty()) // false
console.log(arr) // есть prototype Object { с классом внутри и всеми его методами }

// класс с массивом приделываем к методу фильтр 
const filterArr = arr.filter(item => item >= 10) 

console.log(filterArr) // 10, 33 и есть prototype Object {}
console.log(filterArr.isEmpty()) // false
```

Класс наследует от массива все его методы и таким образом `this` становится массивом, а не пустым объектом.

Встроенные методы, такие как `filter`, `map` и другие возвращают новые объекты унаследованного класса `PowerArray`. Их внутренняя реализация такова, что для этого они используют свойство объекта `constructor`.

Т.е. `arr/filterArr.constructor === PowerArray`.

По этой причине при вызове метода `arr.filter()` он внутри создаёт массив результатов, именно используя `arr.constructor`, а не обычный массив. Это позволяет использовать методы `PowerArray` дальше на результатах.

Можно настроить это поведение при помощи спец. статического геттера `Symbol.species`, который вернёт конструктор и JS будет его использовать в `filter`, `map` и других методах для создания новых объектов.

Если нужно, чтобы методы `filter`, `map` и т.д. возвращали обычные массивы, а прототип с объектом класса, можно вернуть `Array` в `Symbol.species`:

```javascript
class PowerArray extends Array {

    isEmpty () {
        return this.length === 0
    }

    // встроенные методы массива будут использовать этот метод как конструктор
    static get[Symbol.species] () {
        return Array
    }
}

const arr = new PowerArray(1, 2, 5, 10, 50)

console.log(arr.isEmpty()) // false
console.log(arr) // Prototype Array [], а не Prototype Object {}

const filteredArr = arr.filter(item => item >= 10)

console.log(filteredArr) // возвращает обычный массив без прототипа объекта с классом
console.log(filteredArr.isEmpty()) // isEmpty is not a function()
```