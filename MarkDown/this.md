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