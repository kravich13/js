// 1) Добавьте toString в словарь

const dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join() // массив ключей и преобразование в одну строку
        }
    }
})


dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ


for(let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

alert(dictionary) // "apple,__proto__", в одну строку за один раз





// 2) Разница между вызовами

// Давайте создадим новый объект rabbit:

function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

// Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Rabbit - собственное свойство, this === rabbit
Rabbit.prototype.sayHi(); // undefined, у Rabbit нет прототипа
Object.getPrototypeOf(rabbit).sayHi();  // undefined, у него нет прототипа
rabbit.__proto__.sayHi(); // undefined


// В первом вызове this == rabbit, во всех остальных this равен Rabbit.prototype, так как это объект перед точкой.


