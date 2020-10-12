// Складывание имени и фамилии с помощью геттера
// Изменение имени и фамилии с помощью сеттера

const vlad = {
    name: "Vlad",
    surname: "Kravich",

    get fullName () {
        return `${this.name} ${this.surname}`
    }, 
    set fullName (value) { // создать массив
        [this.name, this.surname] = value.split(" ") 
    }
}

vlad.fullName // Vlad Kravich
vlad.fullName = "Maxim Kravich"
vlad.fullName // Maxim Kravich





// Складывание имени и фамилии с помощью геттера в defineProperties
// Изменение имени и фамилии с помощью сеттера в defineProperties

// Дескриптор get set может иметь свои флаги, которые по умолчанию установлены как false

const vlad = {
    name: "Vlad",
    surname: "Kravich"
}

Object.defineProperty(vlad, "fullName", {

    configurable: true,

    get () {
        return `${this.name} ${this.surname}`
    },
    set (value) {
        [this.name, this.surname] = value.split(" ")
    }
})

console.log(vlad.fullName) // Vlad Kravich

for (let key in vlad) console.log(key) // name, surname
// в цикле выводиться не будет, флаг enumerable установлен как false





// Вычисление дня рождения с помощью геттера в defineProperties
// Вывод в консоль передаваемого значения в сеттер в defineProperties

const vlad = Object.defineProperties( {}, {
    name: {
        value: "Vlad",
        enumerable: true,
        writable: true, 
        configurable: true
    },
    birthYear: {
        value: 1997
        // флаги по умолчанию false
    },
    age: { // т.е. в свойстве age автоматом лежит число 23!
        get () {
            return new Date().getFullYear() - this.birthYear
        },
        set (value) {
            console.log(`Передаваемое значение ${value}`)
        }
    }
})

vlad // age: , birthYear: 1997, name: "Vlad"

vlad.age // 23 - геттер для чтения
vlad.age = 33 // сеттер для записи





// Уные геттеры и сеттеры

// Геттеры/сеттеры можно использовать как обёртки над «реальными» значениями свойств, чтобы получить больше контроля над операциями с ними.

// Запрет на длинное/короткое имя прямо в сеттере: 

const vlad = {
    get name () {
        return this._name
    },
    set name (value) {
        if (value.length < 4) {
            return console.log("Короткое имя")
        }
        this._name = value // значение хранится в переменной _name (общ.согл.)
    }
}

vlad.name = "Vlad" // подходит под условие

vlad.name = "Kra" // Короткое имя





// Объекты в основном хранят первоначальный возраст в объекте в поле age, а что, если хранить дату рождения и таким образом иметь свежие данные о пользователе всегда?

// Можно добавить в поле age геттер и это решит проблему

function User (name, birthYear) {
    this.name = name
    this.birthYear = birthYear

    Object.defineProperty(this, "age", {
        enumerable: true,

        get () {
            const todayYear = new Date().getFullYear()
            return todayYear - this.birthYear.getFullYear()
        }
    })
}

const vlad = new User("Vlad", new Date(1997, 8, 2))

for (let key in vlad) console.log(`${key}: ${vlad[key]}`)
// name: Vlad, birthYear: Tue Sep 02 1997, age: 23





// Геттеры и сеттеры можно удалять как обычные свойства: 

const vlad = {

    get name () {
        return this._name
    },
    set name (value) {
        if (value.length < 4) {
            return console.log("Короткое имя")
        }
        this._name = value // значение хранится в переменной _name (общ.согл.)
    }
}

vlad.name = "Vlad" // подходит под условие

delete vlad._name // сеттер удалён
delete vlad.name // геттер удалён

vlad // {}





// Нельзя иметь метод и геттер с одним именем:

const vlad = {
    name: "Vlad",
    surname: "Kravich",

    fullName = "Vlad Kravich", // свойство существует, но get set перезапишет его

    get fullName () {
        return `${this.name} ${this.surname}`
    },
    set fullName (value) {
        [this.name, this.surname] = value.split(" ")
    },

    fullName = "Vlad Kravich" // перезапишет геттер и сеттер
}

vlad.fullName
