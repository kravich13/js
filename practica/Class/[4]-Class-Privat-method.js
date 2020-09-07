class CoffeMachine {
    waterAmount = 0 // кол-во воды внутри

    constructor (power) {
        this.power = power
        console.log(`Создана кофеварка, мощность: ${this.power}`)
    }
}

const coffeMachine = new CoffeMachine(100)

// добавление воды
coffeMachine.waterAmount = 200


// Защищенные свойства начинаются со знака _

// Теперь, защищенное свойство будет нызываться _waterAmount:

class CoffeMachine {
    _waterAmount = 0

    set waterAmount (value) {
        if (value < 0) throw new Error("Отрицательное количество воды")
        this._waterAmount = value
    }

    get waterAmount () {
        return this._waterAmount
    }

    constructor (power) {
        this._power = power
    }
}

const coffeMachine = new CoffeMachine(100) // мощность
coffeMachine.waterAmount = -10 // Uncaught Error: Отрицательное количество воды





// Свойство только для чтения, для этого нужно создать геттер без сеттера

class CoffeMachine {

    constructor (power) {
        this._power = power
    }

    get power () {
        return this._power
    }
}

const coffeMachine = new CoffeMachine(100) // мощность
coffeMachine.power // 100

coffeMachine.power = 150 // ничего не происходит





// Приватное свойство и метод обозначаются знаком #

class CoffeMachine {
    #waterLimit = 200

    #checkWater (value) {
        if (value < 0) throw new Error("Отрицательный уровень воды")
        if (value > this.#waterLimit) throw new Error("Слишком много воды")
    }
}

const coffeMachine = new CoffeMachine()

coffeMachine.#checkWater() // Error
coffeMachine.#waterLimit = 100 // Error



// Приватные поля не конфликтуют с публичными. У нас может быть два поля одновременно – приватное #waterAmount и публичное waterAmount.

class CoffeeMachine {

    #waterAmount = 0
    
    get waterAmount () {
        return this.#waterAmount
    }

    set waterAmount (value) {
        if (value < 0) throw new Error("Отрицательный уровень воды")
        this.#waterAmount = value
    }
}

const machine = new CoffeeMachine()

console.log(machine) // CoffeeMachine {#waterAmount: 0}

machine.waterAmount // Error





// Публичный метод
class Public {
    publicField = "Публичный"
}

const test = new Public()

console.log(test.publicField) // Публичный
test.publicField = "Можно изменить"
console.log(test.publicField) // Можно изменить




// Защищенный метод
class Protected {
    _protectedField = "Защищенный"

    set protectedField (value) {
        this._protectedField = value
    }
    get protectedField () {
        return this._protectedField
    }
}

const test = new Protected()

console.log(test.protectedField) // Защищенный
test.publicField = "Можно изменить"
console.log(test.publicField) // Можно изменить


class Ext extends Protected {
    set protectedField (value) {
        this._protectedField = value + "!!!"
    }

    get protectedField () {
        return `Вот так получаем защищенные поля от класса _protectedField === ${this._protectedField}`
    }
}

const test1 = new Ext()

console.log(test1.protectedField) // Вот так получаем защищенные поля от класса _protectedField === Защищенный
test1.protectedField = "Можно изменить"
console.log(test1.protectedField) // Вот так получаем защищенные поля от класса _protectedField === Можно изменить!!!





// Приватный метод
class Private {
    #privateField = "Приватный"

    getPrivate () {
        return this.#privateField
    }
    setPrivate (value) {
        this.#privateField = value
    }
}

const test = new Private()

console.log(test.getPrivate()) // Приватный
test.setPrivate = "Нельзя изменить"
console.log(test.getPrivate()) // Приватный

class Ext extends Private {}

test1 = new Ext()

console.log(test1.getPrivate()) // Приватный
test1.setPrivate = "Нельзя изменить"
console.log(test1.getPrivate()) // Приватный





class Example {
    publicField   = 'public'
    _protectedField = 'protected'
    #privateField   = 'private'
  
    set protectedField(value){
      this._protectedField = value
    }
    get protectedField(){
      return this._protectedField.toUpperCase()
    }
  
    getPrivateProp(){
      return this.#privateField
    }
  
    setPrivateProp(value){
      this.#privateField = value
    }
  }
  
  const example = new Example()
  
  console.log(example.publicField)      // "public"
  // the protected prop is accessible via getter/setter and is processed before output the result
  console.log(example.protectedField)      // "PROTECTED"
  example.protectedField = 'NewProtected'  
  console.log(example.protectedField)      // "NEWPROTECTED"
  // console.log(example.#privateField)     // SyntaxError, private fields cannot be accessed outside of their home class
  
  console.log(example.getPrivateProp())    // "private", the only way to access a private field is through a function in the same class
  
  
  class Ext extends Example {
    // We can override protected fields from a descendent class
    set protectedField(value){
      this._protectedField = value + "!!!"
    }
  
    get protectedField(){
      return `That's how we get protected fields from the descendent class: _protectedField === ${this._protectedField}`
    }
  
    // But we can't do anything related to a private prop, other than using the existing 'outerInterface' function
    // getPrivateProp(){
    //   return this.#privateField      // SyntaxError, no access to a private prop from the other class
    // }
  }
  
  const extension = new Ext()
  
  console.log(extension.publicField)      // "public"
  console.log(extension.protectedField)    // "That's how we get protected fields from the descendent class: _protectedField === protected"
  // console.log(extension.#privateField)   // SyntaxError, private fields cannot be accessed outside of their home class
  extension.protectedField = 'NewProtected'  
  console.log(extension.protectedField)    // "That's how we get protected fields from the descendent class: _protectedField === NewProtected!!!"
  
  console.log(extension.getPrivateProp())    // "private", the only way to access a private field is through a function in the same class