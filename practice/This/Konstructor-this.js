function Calculator () { // функция калькулятор из конструктора (с большой буквы)
    this.read = function() { 
        this.a = +prompt("число 1") 
        this.b = +prompt("число 2")
    }

    this.sum = function() {
        return this.a + this.b
    }

    this.mul = function() {
        return this.a * this.b
    }
}

let calculator = new Calculator(); // сам объект с функцией внутри "калькулятор"
calculator.read(); // вызов объекта калькулятор и вызов там функции read

alert( "Sum=" + calculator.sum() ); // аналогично
alert( "Mul=" + calculator.mul() );  // аналогично





function Accumulator(startingValue) {
    this.value = startingValue // 1 

    this.read = function () {
        this.value += +prompt("Сколько добавить?") // 10 + 10 + (1) = 21
    }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений