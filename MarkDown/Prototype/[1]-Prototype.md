- [[[Prototype]]](#prototype)
  - [Унаследованные прототипы](#унаследованные-прототипы)
  - [Цепочка из прототипов](#цепочка-из-прототипов)
- [Операции записи не используют прототип](#операции-записи-не-используют-прототип)
- [Значение this](#значение-this)
- [Цикл for..in](#цикл-forin)

## [[Prototype]]

`Prototype` в JS - это скрытый объект, который есть у каждого объекта, который равен либо `null` либо ссылается на другой объект. В нём есть разные свойства к которым есть доступ. 

Пример чтения свойств из одного объекта в другом: 

```javascript
const kravich = {
    money: true
}

const vlad = {
    car: true
}

vlad.__proto__ = kravich

vlad.money // true
kravich.car // undefined 

// kravich.car равно undefined по той причине, что у него нет доступа к vlad.
```

Если искать свойство в `vlad`, а оно отсутствует, JS автоматически берёт его из `kravich`:

```javascript
const kravich = {
    money: true
}

const vlad = {
    car: true
}

vlad.__proto__ = kravich

vlad.money // true - в объекте vlad нет такого свойства и оно есть в proto объекта kravich
```

### Унаследованные прототипы

Объект `kravich` является прототипом объекта `vlad`.

По этому, если у `kravich` есть полезные свойства и методы, то они автоматически станут доступными у `vlad`. Такие свойства называются "унаследованными".

Если есть метод в `kravich`, он может быть вызван в `vlad`:

```javascript
const kravich = {
    money: true,

    more: function () {
        console.log("More Time")
    }
}

const vlad = {
    car: true,

    __proto__: kravich
}

vlad.more() // More Time из kravich
```

### Цепочка из прототипов

Цепочка из прототипов может быть длиннеее:

```javascript
const kravich = {
    money: true,

    more: function () {
        console.log("More Time")
    }
}

const vlad = {
    car: true,

    __proto__: kravich
}

const maks = {
    brain: true,

    __proto__: vlad
}

maks.more() // More Time
maks.car // true
```

Принцип цепочки ледующий: 

1. Объект `kravich` имеет два свойства и 0 прототипов;
2. Объект `vlad` имеет одно свойство и 2 прототипа из `kravich`;
3. Объект `maks` имеет одно свойство, прототип из `vlad` и прототип из `kravich`.
4. Т.е. каждая следующая цепочка имеет всё больше и больше свойств.

Есть два ограничения: 

1. Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если попытаться назначить ``__proto__`` по кругу.
2. Значение `__proto__` может быть объектом или `null`. Другие типы игнорируются.
***

## Операции записи не используют прототип

Прототипы используются только для чтения свойств, операции записи/удаления работают только напрямую через объект.

Пример с удалением: 

```javascript
const animal = {
    jumps: null,
    kravich: true
}
const rabbit = {
    __proto__: animal,
    jumps: true
}

delete rabbit.kravich // удалился? нет

rabbit.kravich // true
```

Пример с присваиванием собственного метода `walk`: 

```javascript
const animal = {
  eats: true,
  walk() {
    /* этот метод не будет использоваться в rabbit */
  }
}

const rabbit = {
  __proto__: animal
}

rabbit.walk = function() {
  alert("Rabbit! Bounce-bounce!")
}

rabbit.walk() // Rabbit! Bounce-bounce! 
// Никакой перезаписи нет, здесь идёт присваивания собственной функции walk
```
***

## Значение this

Пример использования `this` в прототипе: 

```javascript
const animal = {
    eat() {
        this.full = true
    }
}

const rabbit = {
    __proto__: animal
}

rabbit.eat() // rabbit, потому что this - это объект, который стоит перед точкой. rabbit и есть this
```

**Неважно, где находится метод: в объекте или его прототипе. При вызове метода this — всегда объект перед точкой.**
***

## Цикл for..in

Цикл `for..in` проходит не только по собственным, но и по унаследованным свойствам объекта.

Пример: 

```javascript
const kravich = {
    money: true,
}

const vlad = {
    car: true,

    __proto__: kravich
}

console.log(Object.keys(vlad)) // [ "car" ]

// здесь сначала выводится собственный ключ, а уже после - ключи прототипа
for (let prop in vlad) console.log(prop) // car, money
```

Так же можно отфильтровать собственные ключи от прототипов при помощи метода `obj.hasOwnProperty(key)`: он возвращает `true`, если у `obj` есть собственный `key`.

Пример фильтрации: 

```javascript
const kravich = {
    money: true,
}

const vlad = {
    car: true,

    __proto__: kravich
}

for (let prop in vlad) {
    const isOwn = vlad.hasOwnProperty(prop)

    if (isOwn) {
        console.log(`Собственное свойство: ${prop}`) // car
    }
    else {
        console.log(`Прототипное свойство: ${prop}`) // money
    }
}
```
***
**Почти все остальные методы получения ключей/значений игнорируют унаследованные свойства**

Почти все остальные методы, получающие ключи/значения, такие как `Object.keys`, `Object.values` и другие – игнорируют унаследованные свойства.

Они учитывают только свойства самого объекта, не его прототипа.
***
