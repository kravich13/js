// 1) Работа с прототипами

// Какие значения показываются в процессе выполнения кода?
const animal = {
    jumps: null
};
const rabbit = {
    __proto__: animal,
    jumps: true
};

alert(rabbit.jumps); // здесь true от rabbit

delete rabbit.jumps; // удаляется собственное свойство

alert(rabbit.jumps); // здесь null от animal

delete animal.jumps; // удаляет собственное свойство из animal

alert(rabbit.jumps); // здесь undefined





// 2) Алгоритм поиска

// Сделать так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head
// Ответить на вопрос: как быстрее получить значение glasses – через pockets.glasses или через headed.glasses?

const headed = {
    glasses: 1
};

const table = {
    pen: 3,

    __proto__: headed
};

const bed = {
    sheet: 1,
    pillow: 2,

    __proto__: table
};

const pockets = {
    money: 2000,

    __proto__: bed
};

console.log(pockets.pen) // 3
console.log(bed.glasses) // 1
console.log(table.money) // undefined

// Ответ на вопрос: легче всего получить через headed.glasses, но на самом деле это абсолютно неважно, движок умён.





// 3) Куда будет произведена запись?

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
const animal = {
    eat() {
        this.full = true;
    }
};

const rabbit = {
    __proto__: animal
};

rabbit.eat(); // ответ - rabbit, потому что this - это объект, который стоит перед точкой. rabbit и есть this





// 4) Почему наедаются оба хомяка?

const hamster = {
    stomach: [],

    eat(food) {
        // this.stomach.push(food);

        this.stomach = [food] // Теперь всё работает правильно, потому что this.stomach= не ищет свойство stomach. 
    }
};

const speedy = {
    // stomach: [],

    __proto__: hamster
};

const lazy = {
    // stomach: [],

    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple


// По факту достаточно каждому хомяку сделать свой собственный живот и проблема изчезнет