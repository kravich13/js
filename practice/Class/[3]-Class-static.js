class User {
    static kravich () {
        console.log(this === User)
    }
}
User.kravich() // true





class Article {
    constructor (title, date) {
      this.title = title
      this.date = date
    }
  
    // функция сортировки 
    static compare (articleA, articleB) {
      return articleA.date - articleB.date
    }
  }

const articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
]

articles.sort(Article.compare)

console.log(articles[0].title) // первым идёт CSS




// Статические свойства

class Article {
    static kravich = "Влад Кравич"
}
Article.kravich // Влад Кравич

// можно изменить 
Article.kravich = "Макс Кравич"

Article.kravich // Макс Кравич





// Наследование статических свойств и методов


class Animal {

    constructor (name, speed) {
        this.speed = speed
        this.name = name
    }

    run (speed = 0) {
        this.speed += speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }

    // сортировка
    static compare (animalA, animalB) {
        return animalA.speed - animalB.speed
    }
}

class Rabbit extends Animal { // унаследовал static от класса Animal
    hide () {
        console.log(`${this.name} прячется!`)
    }
}

const rabbits = [
    new Rabbit("Белый кролик", 10),
    new Rabbit("Чёрный кролик", 5)
]

rabbits.sort(Rabbit.compare)

console.log(rabbits[0].run()) // Чёрный кролик бежит со скоростью 5






// Создание собственного свойства, которое запоминает количество созданных им объектов

class Person {

    static count = 0

    constructor (options) {
        this.name = options.name
        Person.count ++
    }
}

const vlad = new Person({ 
    name: "Влад",
})

const maks = new Person({ 
    name: "Макс",
})

Person.count // обращение через сам класс