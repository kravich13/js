# Паттерны: behaviour

## Behaviour

Наименование `behaviour` - паттерны, позволяющие **налаживать** коммуникацию между существующими объектами, сущностями и т.д.

### ***Chain of responsibility:***

Этот паттерн позволяет последовательно у одного и того же объекта вызывать набор операций и последовательно их модифицировать:

```js
class MySum {
  constructor(initialValue = 13) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    return this
  }
}

const sum1 = new MySum()

// Последовательная цепочка вызовов в одной строке с возвратом переменной
console.log(sum1.add(7).add(5).add(10).add(13).sum) // 48
```

### ***Comand:***

Этот паттерн позволяет создавать определенную оболочку над функционалом, который позволяет управлять, но через другой объект и тем самым записывая определенные состояния, которые были вызваны:

```js
class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Comand {
  constructor(subject) {
    this.subject = subject
    this.commandsExetuted = []
  }

  execute(command) {
    this.commandsExetuted.push(command)
    return this.subject[command]()
  }
}
```

Теперь можно одно число определить в классе и взаимодействовать с ним существующими методами в классе `MyMath`, а в конце можно получить доступ к массиву всех операций:

```js
const x = new Comand(new MyMath(3))

console.log(x.execute('square')) // 9
console.log(x.execute('cube')) // 27

console.log(x.commandsExetuted)
// Array [ "square", "cube" ]
```

### ***Iterator:***

Итератор позволяет последовательно предоставлять доступ к информации.

```js
class MyIterator {
  constructor(data) {
    this.index = 0
    this.data = data
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done: false
          }
        } else {
          this.index = 0
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

const iterator = new MyIterator(['13', 'миллионов', 'долларов!'])

for (const val of iterator) console.log(val)
```

То же самое можно описать с помощью генератора: 

```js
function* generator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}

const gen = generator(['13', 'миллионов', 'долларов!'])

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

// Или пропустить также самое через цикл
```

### ***Mediator:***

Медиатор позволяет выстраивать коммуникацию между объектами разного типа:

```js
class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }
  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`)
  }
}

class ChatRoom {
  constructor() {
    this.users = {}
  }

  register(user) {
    this.users[user.name] = user
    user.room = this
  }
  send(message, from, to) {
    if (to) to.receive(message, from)
    else {
      Object.keys(this.users).forEach((key) => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}
```

Отправка сообщений: 

```js
const vlad = new User('Vlad')
const max = new User('Max')
const anna = new User('Anna')

const room = new ChatRoom()

room.register(vlad)
room.register(max)
room.register(anna)

vlad.send('Ку', max)
vlad.send('Скачал тунки?', vlad)
anna.send('Привет мальчики')

// Vlad => Max: Ку
// Vlad => Vlad: Скачал тунки?
// Anna => Vlad: Привет мальчики
// Anna => Max: Привет мальчики
```

### ***Observer:***

Этот паттерн формирует зависимость 1 к многим. Допустим есть 1 объект, в котором можно затриггерить вызов изменений и дальше все остальные объекты подписанные на эти изменения - получают обновление и реализуют функционал.

```js
class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    // Долбавили нового юзера при подписке
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    // Убрали юзера из подписки
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  fire(action) {
    // Сделать изменение у всех подписок (каждая подписка - класс с методами)
    this.observers.forEach((observer) => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = state
    this.initialState = state
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += action.payload
        break
      default:
        this.state = this.initialState
    }
  }
}
```

Теперь объекты можно подписать в класс `Subject` и при вызове методов у этого класса - будут меняться все его подписки (объекты): 

```js
const stream$ = new Subject()

const obs1 = new Observer()     // 1
const obs2 = new Observer(13)   // 13

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({ type: 'INCREMENT' }) // +1
stream$.fire({ type: 'INCREMENT' }) // -1
stream$.fire({ type: 'DECREMENT' }) // +1

stream$.fire({ type: 'ADD', payload: 10 }) // +10

console.log(obs1.state) // 12
console.log(obs2.state) // 24
```

### ***State:***

Можно создавать классы, которые будут являться элементами стейта и можно делегировать изменение состоятия этих классов на общий класс, который будет являться общим стейтом и будет менять состояние отдельных элементов:

```js
class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }
  sign() {
    return 'Stop'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }
  sign() {
    return 'Ready'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }
  sign() {
    return 'Run'
  }
}
class TrafficLight {
  constructor() {
      // Массив их классов в конкретном порядке
    this.states = [new RedLight(), new YellowLight(), new GreenLight()]
    this.current = this.states[0]
  }

  change() {
    const total = this.states.length 
    let index = this.states.findIndex((light) => light === this.current)

    // Если текущий индекс +1 меньше кол-ва обших элементов
    // То можно переключить состояние стейта
    this.current = 
        index + 1 < total ? this.states[index + 1] : this.states[0]
  }

  sign() {
    return this.current.sign()
  }
}
```

И теперь можно вызывать сколько угодно раз метод `Change`, но каждый класс будет вызван по конкретной цепочке из массива: 

```js
const traffic = new TrafficLight()

for (let i = 0; i < 6; i++) {
  console.log(traffic.sign())
  traffic.change()
    // Stop 
    // Ready
    // Run 
    // Stop 
    // Ready
    // Run
}
```

### ***Strategy:***

Определяет семейство алгоритмов, которые наслудуют объекты в неизменяемом порядке.

```js
class Vehicle {
  travelTime() {
    return this.timeTaken
  }
}

class Bus extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 10
  }
}

class Taxi extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 5
  }
}

class Car extends Vehicle {
  constructor() {
    super()
    this.timeTaken = 3
  }
}

class Commute {
  travel(transport) {
    return transport.travelTime()
  }
}
```

Теперь через один класс взамодействуем с любым классом в любом порядке:

```js
const commute = new Commute()

console.log(commute.travel(new Taxi())) // 5    
console.log(commute.travel(new Bus()))  // 10
console.log(commute.travel(new Car()))  // 3
```

### ***Template:***

Определяет скелет алгоритма и при этом делегирует создание конкретного функционала в дочерние классы. Т.е. определяет структуру, а дочерние классы реализовывают функционал. 

```js
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsesibilies() {}

  work() {
    return `${this.name} выполняет ${this.responsesibilies()}`
  }

  getPaid() {
    return `${this.name} имеет зп ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsesibilies() {
    return `процесс создания программ`
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsesibilies() {
    return `процесс тестирования`
  }
}
```

Продублировал шаблоны и наследовал от главного класса теперь можно реализовывать их методы и передавать данные в объединяющий метод:
```js
const dev = new Developer('Максим', 100000)
console.log(dev.getPaid())
console.log(dev.work())
// Максим имеет зп 100000
// Максим выполняет процесс создания программ

const tester = new Tester('Анна', 50000)
console.log(tester.getPaid())
console.log(tester.work())
// Анна имеет зп 50000
// Анна выполняет процесс тестирования
```