# Паттерны: creational, structural

Паттерны как в программировании, так и в трейдинге - это не готовое решение чего либо, это определенный шаблон, который подходит под решение определенных задач. 

Если в трейдинге существует одна ситуация с какими-то различиями - то это паттерн, например **пинбар**, под который подходит множество вариаций, но название одно и то же.

В программировании всё ровно также, есть определенный код, который можно написать один раз под множество задач и использовать этот код под названием **паттерн** один раз в нужном вместе, вместо того, чтобы каждый раз писать код заново. 
***

## Creational 

Наименование `creational` - паттерны, которые позволяют **создавать** объекты или классы.


### ***Constructor:***


Паттерн констурктора позволяет создать класс, в котором будут любые поля, любые методы и их можно использовать (самая обычная работа с классом): 

```js
class User {
  constructor(name, money) {
    this.name = name
    this.money = money
  }
  getInfo() {
    return `Имя: ${this.name}, деньги: ${this.money}`
  }
}

const user1 = new User('Влад', '13000000')

console.log(user1.getInfo())
// Имя: Влад, деньги: 13000000
```

### ***Factory:***

Паттерн фектори позволяет создать пользователя с нужными параметрами и автоматически определяет, к какому классу нужно занести конкретного пользователя: 

```js
class WorkingTrading {
  constructor(name) {
    this.name = name
    this.worked = 'Трейдером'
  }
}
class WorkingInvestment {
  constructor(name) {
    this.name = name
    this.worked = 'Инвестором'
  }
}
class WorkingProgramming {
  constructor(name) {
    this.name = name
    this.worked = 'Программистом'
  }
}

class MemberFactory {
    // Статический лист определяет конкретный класс по key
  static list = {
    trader: WorkingTrading,
    investor: WorkingInvestment,
    programmer: WorkingProgramming
  }

    // Create создаёт пользователя, который принимает два параметра
  create(name, work = 'programmer') {
    // Затем создаёт переменную класса с переданным листом
    const Membership = MemberFactory.list[work] || MemberFactory.list.programmer

    // Теперь member - это конкретный первоначальный класс со всеми методами
    const member = new Membership(name)

    member.work = work
    member.define = function () {
      console.log(`${this.name} (${this.work}): работает ${this.worked}`)
    }
    return member
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Vlad', 'investor'),
  factory.create('Maxim', 'programmer'),
  factory.create('Sergey', 'trader')
]
```

И на выходе можно пройтись по массиву и вызвать метод `define`, который показывает полную информацию о конкретном созданном пользователе: 

```js
members.forEach((elem) => elem.define())

// Vlad (investor): работает Инвестором
// Maxim (programmer): работает Программистом
// Sergey (trader): работает Трейдером
```

### ***Prototype:***

Паттерн прототайп позволяет создать скелет объекта и затем от него создавать такой же объект, но с другими любыми свойствами:

```js
const car = {
  wheels: 4,

  init() {
    console.log(`У меня есть ${this.wheels} колеса, мой владелец ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Vlad'
  }
})

carWithOwner.init()
// У меня есть 4 колеса, мой владелец Vlad
```

### ***Singleton:***

Паттерн синглтон тогда, когда существует класс в приложении и может быть лишь один инстанс данного класса. Например используется в подключениях к БД и если используется одно соединение - то юзаем существующее соединение:

```js
class Database {
  constructor(data) {
    if (Database.exists) {
      // Возвращает  Object { data: "MongoDB" }
      return Database.instance
    }
    Database.instance = this
    Database.exists = true
    this.data = data
  }

  getData() {
    return this.data
  }
}

const mongo = new Database('MongoDB')
const mysql = new Database('MySQL')

console.log(mongo.getData())
// MongoDB

console.log(mysql.getData())
// MongoDB
```
***

## Structural

Наименование `structural` - паттерны, которые имея старый функционал каких-то объектов, позволяют **добавить** к ним новый функционал и при этом не затрагивают старый

### ***Adapter:***

Адаптер позволяет интегрировать старый интерфейс класса в новый интерфейс и позволяет им работать совместно не ломая приложения. Очень часто используются с API, где обращение идёт к старому API, а возвращает данные из нового API:

```js
class OldCacl {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add':
        return t1 + t2
      case 'sub':
        return t1 - t2
      default:
        return NaN
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }
  sub(t1, t2) {
    return t1 - t2
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add':
        return this.calc.add(t1, t2)
      case 'sub':
        return this.calc.sub(t1, t2)
      default:
        return NaN
    }
  }
}
```

Теперь можно посмотреть, что из себя представляет каждый калькулятор:

```js
const oldCalc = new OldCacl()
const newCalc = new NewCalc()
const adapter = new CalcAdapter()

console.log(oldCalc.operations(10, 3, 'add')) // 13
console.log(newCalc.add(10, 3)) // 13
console.log(adapter.operations(23, 10, 'sub')) // 13
```

### ***Decorator:***

Декоратор позволяет классам добавлять новое поведение или новый функционал:

```js
class Crypto {
  constructor(crypto, count) {
    this.crypto = crypto
    this.count = count
  }

  get numberOfCoins() {
    return `Кол-во монет ${this.crypto}: ${this.count}`
  }
}

function aws(crypto) {
  crypto.isAWS = true
  crypto.awsINFO = function () {
    return crypto.numberOfCoins
  }
  return crypto
}

function azure(crypto) {
  crypto.isAzure = true
  crypto.count += 3
  return crypto
}
```

И теперь можно посмотреть на результат декораторов:

```js
const c1 = aws(new Crypto('ETH', '130'))
const c2 = azure(new Crypto('EOS', '13000'))

console.log(c1.isAWS) // true
console.log(c1.awsINFO()) // Кол-во монет ETH: 130

console.log(c2.isAzure) // true
console.log(c2.numberOfCoins) // Кол-во монет EOS: 130003
```

### ***Facade:***

Служит для того, чтобы создавать более простой и понятный интерфейс для взаимодействия с классами. Типо как `jQery`, где можно очень просто создавать/получать/модифицировать данные. 

```js
class Complaints {
  constructor() {
    this.complaints = []
  }

  add(complaint) {
    this.complaints.push(complaint)
    // 2) Вызываем метод у наследовашего класса
    return this.reply(complaint)
  }
}

class ProductComplaints extends Complaints {
  // 3) Выводим надпись добавленного юзера
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  // 3) Выводим надпись добавленного юзера
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

class ComplaintRegistry {
  register(customer, type, details) {
    const id = Date.now()

    const complaint =
      type === 'service' ? new ServiceComplaints() : new ProductComplaints()

    // 1) Возвращаем объект данных в конкретный класс и добавляем в массив
    return complaint.add({ id, customer, details })
  }
}
```

Таким образом, все управления всеми методами производятся через класс `ComplaintRegistry` и не нужно каждый раз писать заново конкретный класс с конкретным полем:

```js
const registry = new ComplaintRegistry()

console.log(registry.register('Vlad', 'service', 'недоступен'))
console.log(registry.register('Max', 'product', 'доступен'))
// Service: 1615981888484: Vlad (недоступен)
// Product: 1615984014013: Max (доступен)
```

### ***Flywight:***

Служит для того, чтобы избежать повторной загрузки данных, которые уже были загружены. 

Например зашел на сайт, показались картинки, обновляешь страницу и все данные автоматически закешированы при первом заходе и ничего заново не заканчивается.

```js
class Phone {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class PhoneFactory {
  constructor() {
    this.phone = []
  }

  create(model, price) {
    const candidate = this.getPhone(model)
    if (candidate) return candidate

    const newPhone = new Phone(model, price)
    this.phone.push(newPhone)
    return newPhone
  }

  getPhone(model) {
    return this.phone.find((phone) => phone.model === model)
  }
}
```

И теперь класс `PhoneFactory` кеширует абсолютно любые новые данные:

```js
const factory = new PhoneFactory()

const iPhone12 = factory.create('iphone', '1000')
const xiaomiNote6 = factory.create('xiaomi', '200')
const iPhone11 = factory.create('iphone', '750')

console.log(iPhone12)
// Object { model: "iphone", price: "1000" } 
// - айфон, занёс в массив

console.log(xiaomiNote6)
// Object { model: "xiaomi", price: "200" }  
// - ксяоми, занёс в массив

console.log(iPhone11)
// Object { model: "iphone", price: "1000" } 
// - айфон уже есть и ничего не добавляем
```

### ***Proxy:***

Этот паттерн позволяет проксировать запросы с сервера и тем самым он работает также, как `ApolloClient` для реакта, в котором все неизмененные данные кешируются и при повторном нажатии на кнопку - запрос не посылается и данные возвращаются с кэша. 

```js
function networkFetch(url) {
  return `${url} - ответ с сервера`
}

const cashe = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]

    if (cashe.has(url)) return `${url} ответ из кэша`
    else {
      cashe.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('kravich.com')) // ответ с сервера
console.log(proxiedFetch('tinder.com')) // ответ с сервера
console.log(proxiedFetch('kravich.com')) // ответ из кэша
```
