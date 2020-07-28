// Изменение встроенных прототипов

String.prototype.kravich = function () {
    console.log(`${this} Kravich`)
}

"Vlad".kravich() // String { "Vlad" }

// Создался новый метод для прототипов ко всем строкам




// Полифил для метода прототипа

if (!String.prototype.kravich) { // если нет такого метода
    
    String.prototype.kravich = function () {
        return `${this} Kravich`
    }
}

"Vlad".kravich()




// Заиствование прототипов

const obj = {
    0: "Vlad",
    1: "Kravich",
    length: 2.
}

obj.join = Array.prototype.join

console.log(obj.join(', ')) // Vlad, Kravich

obj // Object { 0: "Vlad", 1: "Kravich", length: 2, join: join() }

// Т.е. самому объекту встраивается метод из прототипа массивов