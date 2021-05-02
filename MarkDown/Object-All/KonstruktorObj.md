- [Конструктор объектов](#конструктор-объектов)
- [Методы](#методы)
- [Приватные методы и данные, замыкания.](#приватные-методы-и-данные-замыкания)

## Конструктор объектов
Для создания объектов используются функции конструкторы, которые совпадают с именем самой функции. 

```javascript
function Person (name, surname) {
    this.name = name
    this.surname = surname
}
let Persona = new Person("Vlad", "Kravich") 
// в переменную Persona присваиваем вызов функции с параметрами
```

Сам конструктор ничего не возвращает при помощи `return`, считается, что он возвращает новый объект и для этого достаточно заполнить нужные поля в `this.`

***

## Методы
Как и сами данные объекта, можно задать определенные методы: 

```javascript
function Person(name, surname){
    this.name    = name
    this.surname = surname

    this.getFullName = function(){ // в getFullName присваивается функция
        if (this.fatherName) { 
            return this.name + " " + this.fatherName + " " + this.surname
            // вернуть имя + отчество + фамилия
        }
        else {
            return this.name + " " + this.surname
            // вернуть имя + фамилия
        }
    }
}

let Persona = new Person("Vlad", "Kravich")
alert(Persona.getFullName()) 
// алерт с объектом и вызовом функции getFullName() через точку
// результат алерта будет имя + фамилия

Persona.fatherName = "Alexandrovich"
alert(Persona.getFullName())
// так же само
// результат будет имя + отчество + фамилия
```

`this` можно считать скрытым параметром функции, если функция вызвана через точку как поле объекта (в коде выше описано)

***

## Приватные методы и данные, замыкания.
Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена. Другими словами, замыкание дает вам доступ к Scope внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз при созданиии функции, во время ее создания.

```javascript
function makeFunc() {
  let name = "Mozilla"
  function displayName() {
    alert(name)
  }
  return displayName;
}

let myFunc = makeFunc()
myFunc() // результат вызова - Mozilla
```

Внутренняя функция `displayName()` была возвращена из внешней до того, как была выполнена.  