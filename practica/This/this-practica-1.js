// 1) Каким будет результат выполнения этого кода?

let user = {
    name: "Джон",
    go: function () {
        console.log(this.name)
    }
}; // нужна точка с запятой ибо без неё (user.go) будет являться продолжением объекта

(user.go)()





// 2) Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
};

let user = makeUser();

// this внутри функции не равен объекту и нет такой записи makeUser.name
console.log(user.ref.name); // Ошибка





// 3) Создайте калькулятор

let calculator = {

    read() {
        this.a = +prompt("Введите первое число")
        this.b = +prompt("Введите второе число")
    },

    sum () {
        return this.a + this.b
    },

    mul () {
        return this.a * this.b
    }
};
  

calculator.read() // запросить
alert( calculator.sum() ) // суммировать
alert( calculator.mul() ) // умножить





// 4) Цепь вызовов

let ladder = {
    step: 0,

    up() {
        this.step++;
        return this // вернуть this, чтобы вызвать с ним следующий метод
    },
    down() {
        this.step--;
        return this // вернуть this, чтобы вызвать с ним следующий метод
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
    }
};

// Фактически, должно быть что-то такого: ladder.up().Ladder.up().Laader.down().Ladder.showStep()
ladder.up().up().down().showStep(); // 1