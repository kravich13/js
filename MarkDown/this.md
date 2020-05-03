## Для доступа к информации внутри объекта метод может использовать ключевое слово `this`.

В краце: `this` работает по сути точно так же, как метод `let key in obj`, только не в одном объекте, а во всех. 
Пример: 

```javascript
let obj = {
    name: "Vlad",
    age: 22,
    firstName: "Kravich",

    sayHi() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.test);
    }
}
obj.sayHi();
// будет вывод всех полей, т.е. this должен быть в функции, которая находится в самом объекте
```

Ещё пример: 

```javascript
let user = {
name: "Vlad", 
age: 22
}
let userTwo = {
name: "Just",
age: 33
}

function sayHi () {
console.log(this.name)
}

user.f = sayHi
userTwo.f = sayHi
// в обоих объектах теперь есть функция sayHi с выводом поля
```

Правило простое: при вызове `obj.f()` значение `this` внутри `f` равно `obj`. Так что, в приведённом примере это `user` или `userTwo`.

***

## У стрелочных функций нет `this`

Стрелочные функции особенные: у них нет своего «собственного» `this`. Если мы используем `this` внутри стрелочной функции, то его значение берётся из внешней «нормальной» функции.

Например, здесь `arrow()` использует значение `this` из внешнего метода `user.sayHi()`:

```javascript
let user = {
  firstName: "Влад",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow()
  }
}

user.sayHi() // Влад
```
***
В обработчике событий this будет тем, что стоит перед точкой. 
Пример: 

```javascript
div.addEventListener("click", function(event) {
    console.log(this) // вывыедет div
    this.innerHTML = "<p>text</p>" // изменит содержимое div на "text", т.е. this будет div
    this.style.backgroundColor = "red" // покрасил div 
})

```

*** 

## Метод bind 

`bind` - значит забиндить (как в сампе), т.е. неважно где будет вызван метод `.bind`, переданный контекст вызовется всегда. 

Пример: 

```javascript
const person = {
  name: "Vlad",
  age: 22,
  logInfo: function (napitok) {
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Пьет ${napitok}`)
  }
}

const kravich = {
  name: "Just",
  age: 33
}

// здесь делается вызов объекта person с ключем logInfo и бинрдится к этому вызову объект kravich
person.logInfo.bind(kravich, "coca-cola")() 
```

Вызывается объект `person.logInfo` (функция) с одним параметром, которая выводит имя и возраст объекта `person`. К этому же вызову присваивается метод `.bind` с контекстом `kravich` (объект). 

Таким образом, вызывается одна функция в контексте одного объекта, а на деле метод `bind` вызывает контекст другого объекта.

Замечание: метод `bind` можно вызвать тогда, когда нам нужно.


*** 

## Метод call

Метод `call` служит для точно такой же цели, как и метод `bind`, но у него есть одно отличие: этот метод вызывается сразу. 

Пример из `bind`: 

```javascript
// вызов из прошлого примера
person.logInfo.call(kravich, "coca-cola")
```
Т.е. здесь нет самого вызова функции `()`, она вызывается сразу же.

***

## Метод apply 

Метод `apply` принимает только два параметра, а не бесконечное количество, как методы `bind` vs `call`. Первый параметр - это сам объект, а второй параметр - это массив из параметров для встроенной функции.

Пример из `bind`: 

```javascript
// вызов из прошлого примера
person.logInfo.apply(kravich, ["coca-cola"])
```

